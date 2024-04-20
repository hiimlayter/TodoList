import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  logInObj: Login;
  registerObj: Register;

  constructor(private elementRef: ElementRef<HTMLElement>, private accountService: AccountService, private router: Router) { 
    this.logInObj = new Login();
    this.registerObj = new Register();
  }
  public LogIn(){
    this.accountService.login(this.logInObj).subscribe({
      next: () => {
        this.accountService.isLoggedIn = true;
        this.accountService.setLoggedUser(this.logInObj);
        this.router.navigate(['/dashboard']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  public Register(){
    this.accountService.register(this.registerObj).subscribe({
      next: (data: any) => {
        this.accountService.isLoggedIn = true;
        this.accountService.setLoggedUser(this.registerObj);
        this.router.navigate(['/dashboard']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  public signUpChange () {
    var element = document.getElementById("container");
    if(element != null){
      element.classList.add("right-panel-active");
    }
  };
  
  public signInChange () {
    var element = document.getElementById("container");
    if(element != null){
      element.classList.remove("right-panel-active");
    };
  }
}

export class Login {
  Email: string;
  Password: string;
  constructor(){
    this.Email = "";
    this.Password = "";
  }
}

export class Register {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  constructor(){
    this.Email = "";
    this.Password = "";
    this.ConfirmPassword = "";
    this.FirstName = "";
    this.LastName = "";
  }
}