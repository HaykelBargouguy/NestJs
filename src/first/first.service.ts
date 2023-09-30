import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class FirstService {
    constructor(private loggerservice : LoggerService){}
    sayHello() :String{
        return this.loggerservice.logger("hello word ^^^^") ;
    }
}
