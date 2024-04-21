import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../app.component';
import { TodoService } from '../../services/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  
  editMode: boolean = false;

  @Input() todo: Todo;
  
  constructor(private todoService: TodoService, private router: Router) {
    this.todo = new Todo(0, "", "", "", false);
  }
  
  ngOnInit(): void {
  }

  delete(){
    this.todoService.deleteTodo(this.todo?.Id || 0).subscribe({
      next: (response) => {
        //ADD TODO TO LIST
        console.log(Response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  changeTodoStatus(){

    this.todo.IsDone = !this.todo?.IsDone;

    this.todoService.editTodo(this.todo?.Id || 0, this.todo).subscribe({
      next: (response) => {
        //ADD TODO TO LIST
        console.log(Response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  edit(){
    console.log('edit clicked');
    this.router.navigate(['/edit', this.todo.Id]);
  }
}
