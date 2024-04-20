import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public addTodo(body: any): Observable<any>{
    return this.httpClient.post(`https://localhost:7218/api/todo/create`, body);
  }

  public getTodos(){
    return this.httpClient.get<any[]>(`https://localhost:7218/api/todo/user`)
     .pipe(
       map((response: any) => {
         return response.map((todo: any) => {
           return new Todo(
             todo.title,
             todo.description,
             todo.date,
             todo.isDone = todo.isDone);
           });
          }
        )
      );
  }
}
