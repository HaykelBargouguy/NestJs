import { Global, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    logger(message:any){
        return `from LoggerService ${message}`    }
}
