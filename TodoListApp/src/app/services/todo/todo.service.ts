import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { Todo } from '../../app.component';

const baseTodoUrl = 'http://mbtodolistapi.azurewebsites.net/api/todo/'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  public addTodo(body: any): Observable<any>{
    return this.httpClient.post(`${baseTodoUrl}create`, body)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  public getTodos(){
    return this.httpClient.get<any[]>(`${baseTodoUrl}user`)
     .pipe(
       map((response: any) => {
         return response.map((todo: any) => {
           return new Todo(
             todo.id,
             todo.title,
             todo.description,
             todo.date,
             todo.isDone = todo.isDone);
           });
          }
        )
      );
  }

  public getTodoById(id: number): Observable<Todo>{
    return this.httpClient.get<any>(`${baseTodoUrl}${id}`);
  }

  public deleteTodo(id: number){
    return this.httpClient.delete(`${baseTodoUrl}${id}`)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );;
  }

  public editTodo(id: number, body: any){
    return this.httpClient.put(`${baseTodoUrl}${id}`, body)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }
}
