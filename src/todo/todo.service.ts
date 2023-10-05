import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './Entities/todo.entity';

@Injectable()
export class TodoService {
  todos :Todo[]=[]; 

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


getTodoById(id:number):Todo{

    const todo = this.todos.find((actualTodo :Todo) => actualTodo.id === +id)
    if(!todo)
    throw new NotFoundException ("The id does not exist.");
    return todo ; 
}

addTodo(newTodo : Todo){
    
        if(this.todos.length){
        newTodo.id = this.todos.length
        }
        else{
            newTodo.id = 0  ;
        }
    
        this.todos.push(newTodo)
        return `The new todo "${newTodo.id} : ${newTodo.name} : ${newTodo.description}" is successfully added`
    }
deleteTodo(id:number){


    const todoExists = this.todos.some(todo => todo.id === id);
    //ou bien .findindex 
    //splice(index , number d'oebjet a supprimer)

    if (!todoExists) {
        throw new NotFoundException (`The id ${id} concerned does not exist.`);
    }

    this.todos = this.todos.filter(todo => todo.id !== id);
    return `The todo d'id ${id} is deleted successfully `;

    }

Modify1Todo(mesParames){      

        const todoexists = this.todos.some(todo => todo.id === +(mesParames.id))

        if(!todoexists)
            throw new NotFoundException (`The id concerned ${mesParames.id} does not exist!!`);
        const todo = this.todos.find((actualTodo :Todo) => actualTodo.id === +(mesParames.id))
        
        console.log(todo)

        todo.name = mesParames.name ;
        todo.description= mesParames.newdescription ;
        this.todos.push(todo) ;
        return `the todo d'id ${mesParames.id} is modified successfully !`
 }


Modify2Todo(mesParames,newtodo){
    const todo = this.getTodoById(+(mesParames.id))
        if (!todo) {
            // Handle the case when todo is not found, perhaps throw an exception
            throw new NotFoundException(`Todo with ID ${mesParames.id} not found.`);
        }

        todo.description= newtodo.description? newtodo.description :todo.description ;
        todo.name = newtodo.name? newtodo.name :todo.name ;

        return todo ; 


        
}


}





