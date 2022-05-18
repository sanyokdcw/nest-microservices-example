import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_SERVICE', transport: Transport.TCP, options: {
          port: 3001,
        },
      },
      {
        name: 'CAR_SERVICE', transport: Transport.TCP, options: {
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [AppService],
})
export class AppModule {
}
