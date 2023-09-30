import { Controller, Get } from '@nestjs/common';
import { FirstService } from './first.service';

@Controller('first')
export class FirstController {
/*firstservice = new FirstService() // le probleme est que dans la partie de FirstService,
//on a met @ injectables() which does mean that the creation of an instance of FistService 
//is not my responsibility , or me i put = new !!!!!!!!!!!*/ 
constructor(private firstservice: FirstService) {}

@Get()
getCc(){
    return this.firstservice.sayHello() ;
}
}