import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerService } from 'src/logger/logger.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports:[],
  controllers: [FirstController],
  providers: [FirstService],

})
export class FirstModule {}
