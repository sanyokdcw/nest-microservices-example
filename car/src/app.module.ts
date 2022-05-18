import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CarController],
  providers: [AppService],
})
export class AppModule {}
