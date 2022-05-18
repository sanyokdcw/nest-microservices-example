import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [AppService],
})
export class AppModule {}
