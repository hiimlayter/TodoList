import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginResponse } from '../../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseAccountUrl = 'http://mbtodolistapi.azurewebsites.net/api/account/';
  baseTodoUrl = 'http://mbtodolistapi.azurewebsites.net/api/todo/';

  login(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseAccountUrl}login`, body);
  }

  logout(): Observable<any>{
    return this.httpClient.post(`${this.baseAccountUrl}logout`, null);
  }

  register(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseAccountUrl}register`, body);
  }

  addTodo(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseTodoUrl}create`, body);
  }

  editTodo(body: any, id: number): Observable<any>{
    return this.httpClient.put(`${this.baseTodoUrl}${id}`, body);
  }

  getUserTodo(){
    return this.httpClient.get<any[]>(`${this.baseTodoUrl}user`);
  }

  deleteTodo(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseTodoUrl}${id}`);
  }
}
