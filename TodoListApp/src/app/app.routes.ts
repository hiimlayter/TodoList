import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'login', component: LoginComponent, canActivate: [authGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}
];
