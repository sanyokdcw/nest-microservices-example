import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('TASK_SERVICE') private taskClient: ClientProxy)  {}

  @Post('/create-task')
  createTask(@Body() data) {
    return this.taskClient.send('create_task', data);
  }
}
