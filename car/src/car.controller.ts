import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CarController {
  @MessagePattern('is_car_exists')
  isCarExists(name) {
    const carId = 112;
    return carId;
  }
}
