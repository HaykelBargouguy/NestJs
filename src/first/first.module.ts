import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  controllers: [FirstController],
  providers: [FirstService,LoggerService],

})
export class FirstModule {}
