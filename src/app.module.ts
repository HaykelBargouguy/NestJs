import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { FirstService } from './first/first.service';
import { FirstModule } from './first/first.module';
import { CommonModule } from './common/common.module';
import { LoggerService } from './logger/logger.service';

@Module({ 
  imports: [TodoModule, FirstModule,CommonModule],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
