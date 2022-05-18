import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Controller()
export class TaskController {
  constructor(
    @Inject('CLIENT_SERVICE') private clientService: ClientProxy,
    @Inject('CAR_SERVICE') private carService: ClientProxy,
  ) {
  }

  @MessagePattern('create_task')
  async createTask(data: { carName: string, clientData: { name: string, email: string } }) {
    const carId = await lastValueFrom(this.carService.send('is_car_exists', data.carName));
    if(carId) {
      const clientId = await lastValueFrom(this.clientService.send('find_or_create_client', data.clientData.email));
      return { status: 'true', message: 'Заявка создана' };
    }
    return { status: 'false', message: 'Заявку не удалось создать.' };
  };
}
