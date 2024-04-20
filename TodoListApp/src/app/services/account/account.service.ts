import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isLoggedIn = false;

  static email: string;

  assignOutput(incommingParameter: string){
    AccountService.email = incommingParameter;
  }

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://localhost:7218/api/account/';

  login(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}login`, body);
  }

  logout(): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}logout`, null);
  }

  register(body: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}register`, body);
  }

  setLoggedUser(body: any){
    AccountService.email = body.Email;
  }

  clearLoggedUser(){
    AccountService.email = "";
  }
}
