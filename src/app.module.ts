import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { FirstService } from './first/first.service';
import { FirstModule } from './first/first.module';
import { LoggerService } from './logger/logger.service';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TodoModule, FirstModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, FirstService, LoggerService],
})
export class AppModule {}
