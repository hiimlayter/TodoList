import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account/account.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService) as AccountService;
  const router = inject(Router) as Router;

  if(route.routeConfig?.path === 'login'){
    return accountService.isLoggedIn ? router.navigate(['/dashboard']) : true;
  }

  return accountService.isLoggedIn ? true : router.navigate(['/login']);
};
