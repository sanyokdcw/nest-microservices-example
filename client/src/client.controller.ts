import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ClientController {
  @MessagePattern('find_or_create_client')
  findOrCreateClient(clientEmail) {
    console.log(clientEmail);
    const client = {
      id: 1,
      name: 'sanyok',
      email: 'sanyok@sanyok.com',
      phone: '87473060965',
    };
    return client.id;
  }
}
