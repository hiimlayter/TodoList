import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { EditTodoFormComponent } from './components/editTodoForm/edit-todo-form.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'login', component: LoginComponent, canActivate: [authGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'edit/:id', component: EditTodoFormComponent, canActivate: [authGuard]}
];
