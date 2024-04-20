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
      next: (response) => {
        //ADD TODO TO LIST
        console.log(Response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }
}