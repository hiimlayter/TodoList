import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
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

export class LoginComponent implements OnInit{

  logInObj: Login;
  registerObj: Register;

  errorMessageLogin: string;
  errorMessageRegister: string;

  constructor(private elementRef: ElementRef<HTMLElement>, private accountService: AccountService, private router: Router) { 
    this.logInObj = new Login();
    this.registerObj = new Register();
    this.errorMessageLogin = "";
    this.errorMessageRegister = "";
  }

  ngOnInit(): void {
  }

  public LogIn(){
    this.accountService.login(this.logInObj).subscribe({
      next: () => {
        this.accountService.isLoggedIn = true;
        AccountService.email = this.logInObj.Email;
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessageLogin = "Błąd";
      }
    });
  }

  public Register(){
    this.accountService.register(this.registerObj).subscribe({
      next: () => {
        this.accountService.isLoggedIn = true;
        AccountService.email = this.registerObj.Email;
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessageLogin = "Błąd";
      }
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