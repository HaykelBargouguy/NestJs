import { Controller, Get , Post , Put , Patch, Delete, Req, Res, Body, Param, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Todo } from './Entities/todo.entity';
import { Addtodo } from './dto/add-todo.dto';

@Controller('todo')
export class TodoController {
 constructor(){ 
    this.todos =  []
}
    todos: Todo[];
    
/*Retourner la liste de todo*/
@Get()
getTodo(
    /* @Req() request : Request ,
       @Res() response : Response */
){

   /* console.log(response)
    response.status(205)
    response.json(
        { 
            contenu  :`Je suis une reponse genere par l'element response de Express`
        }
        )
        console.log(response)*/

        return this.todos
    }
/*
    @Get('/:id/:year')
getParam(
    @Param('id') id ,
    @Param('year') year 
){
    return ` la post d'id ${id} est posté dans l'année ${year}`
}*/

@Get('/:id')
getTodoById(
    @Param('id') id ,
){
    const todo = this.todos.find((actualTodo :Todo) => actualTodo.id === +id)
    if(!todo)

     throw new NotFoundException ("The id does not exist.");

    return todo ; 
}

@Post('/dto')
newtodo(@Body() addtodo :Addtodo){

    return addtodo
}

@Post()
AddTodo(
@Body() newTodo : Todo
){
    //console.log(newTodo.sayHello())
    if(this.todos.length){
    newTodo.id = this.todos.length
    }
    else{
        newTodo.id = 0  ;
    }

    this.todos.push(newTodo)
    return `The new todo "${newTodo.id} : ${newTodo.name} : ${newTodo.description}" is successfully added`
}

@Delete('/:id')
DeleteTodo(
    @Param() mesParames,
){
    const idToDelete = Number(mesParames.id);

    const todoExists = this.todos.some(todo => todo.id === idToDelete);
    //ou bien .findindex 
    //splice(index , number d'oebjet a supprimer)

    if (!todoExists) {
        throw new NotFoundException (`The id ${mesParames.id} concerned does not exist.`);
    }

    this.todos = this.todos.filter(todo => todo.id !== idToDelete);
    return `The todo d'id ${mesParames.id} is deleted successfully `;
}


    @Put('/:id/:newname/:newdescription')
    ModifieTodo(
        @Param() mesParames , 
    ){
        const idToModify = Number(mesParames.id)

        const todoexists = this.todos.some(todo => todo.id === idToModify)

        if(!todoexists)
            return `The id concerned ${mesParames.id} does not exist!!`
            const todo = this.todos.find((actualTodo :Todo) => actualTodo.id === +mesParames.id)

        console.log(todo);
        todo.name = mesParames.newname ;
        todo.description= mesParames.newdescription ;
        this.todos.push(todo) ;
        return `the todo d'id ${mesParames.id} is modified successfully !`
    }


    @Put('/:id')
    ModifyTodo(
        @Param() mesParames , 
        @Body() newtodo: Partial<Todo> , 
    ){
        const idToModify = Number(mesParames.id)

        const todo = this.getTodoById(idToModify)
        if (!todo) {
            // Handle the case when todo is not found, perhaps throw an exception
            throw new NotFoundException(`Todo with ID ${idToModify} not found.`);
        }

        todo.description= newtodo.description? newtodo.description :todo.description ;
        todo.name = newtodo.name? newtodo.name :todo.name ;

        return todo ; 


        
    }

}
