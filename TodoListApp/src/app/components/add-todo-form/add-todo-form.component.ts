import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {

  todoObj: Todo;

  constructor(private todoService: TodoService){
    this.todoObj = new Todo("","", new Date());
  }

  public addTodo(){
    this.todoService.addTodo(this.todoObj).subscribe({
      next: () => {
        //ADD TODO TO LIST
        console.log("Todo added");
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });

    this.todoService.editTodo(this.todoObj, 2).subscribe({
      next: () => {
        //ADD TODO TO LIST
        console.log("Todo edited");
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });

    this.todoService.getUserTodo().subscribe({
      next: () => {
        //ADD TODO TO LIST
        console.log("Todo fetched");
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });

    this.todoService.deleteTodo(2).subscribe({
      next: () => {
        //ADD TODO TO LIST
        console.log("Todo deleted");
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }

}