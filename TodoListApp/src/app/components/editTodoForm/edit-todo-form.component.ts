import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { Todo } from '../../app.component';
import { Todo as TodoReq} from '../../models/todo';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-todo-form.component.html',
  styleUrl: './edit-todo-form.component.css'
})
export class EditTodoFormComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  todoObj: Todo;
  todoId: number = 0;

  ngOnInit(): void {
  }

  constructor(private todoService: TodoService, private router: Router){
    this.todoObj = new Todo(1, "", "", "", false);
    this.todoService.getTodoById(this.route.snapshot.params['id']).forEach(todo => { this.todoObj = todo; });
    this.todoId = this.route.snapshot.params['id'];
  }

  public editTodo(){
    this.todoService.editTodo(this.todoId, new TodoReq(this.todoObj.Title, this.todoObj.Description, new Date(this.todoObj.Date), this.todoObj.IsDone)).subscribe({
      next: (response) => {
        //ADD TODO TO LIST
        console.log(Response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
      complete: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
