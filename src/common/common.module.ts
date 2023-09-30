import { Global, Module } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Global()
@Module({})
export class CommonModule {
    providers : [LoggerService]
}
