import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  email: string = '';

  ngOnInit(){
    this.email = AccountService.email;
  }

  constructor(private accountService: AccountService, private router: Router) 
  {
  }

  public signOut(){
    this.accountService.logout().subscribe({
      next: () => {
        AccountService.email = '';
        this.accountService.isLoggedIn = false;
        this.router.navigate(['/login']);
      },
      error: () => {
      },
    });
  }
}
