import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://localhost:7218/api/todo/';

  addTodo(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}create`, body);
  }

  editTodo(body: any, id: number): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}${id}`, body);
  }

  getUserTodo(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}user`);
  }

  deleteTodo(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
}
