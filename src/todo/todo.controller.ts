import { Controller, Get , Post , Put , Patch, Delete, Req, Res, Body, Param, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Todo } from './Entities/todo.entity';
import { Addtodo } from './dto/add-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
 
constructor(private todoservice :TodoService){}

/*Retourner la liste de todo*/
@Get()
getTodo(){
return this.todoservice.getTodo()
}

@Get('/:id')
getTodoById(@Param('id') id)
{
 return this.todoservice.getTodoById(+id) ;
}

@Post()
addTodo(@Body() newTodo : Todo){
     return this.todoservice.addTodo(newTodo)
    }

@Delete('/:id')
deleteTodo(@Param() mesParames){
    return this.todoservice.deleteTodo(+(mesParames.id))
    }


@Put('/:id/:newname/:newdescription')
    Modify1Todo(
        @Param() mesParames , 
    ){
        return this.todoservice.Modify1Todo(mesParames)
    }


@Put('/:id')
Modify2Todo(
    @Param() mesParames , 
    @Body() newtodo: Partial<Todo> , 
    ){
    return this.todoservice.Modify2Todo(mesParames,newtodo)
        
    }

}
