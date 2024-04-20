import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginResponse } from '../../interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isLoggedIn = false;

  static email: string;

  assignOutput(incommingParameter: string){
    AccountService.email = incommingParameter;
  }

  constructor(private apiService: ApiService, private router: Router) { }

  public login(body: any): any{
    return this.apiService.login(body);
  }

  public register(body: any): any{
    return this.apiService.register(body);
  }

  public logout(): any{
    return this.apiService.logout();
  }
}
