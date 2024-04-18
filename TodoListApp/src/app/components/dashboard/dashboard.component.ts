import { Component } from '@angular/core';
import { DaysContainerComponent } from '../days-container/days-container.component';
import { HeaderComponent } from '../header/header.component';
import { AddTodoFormComponent } from '../add-todo-form/add-todo-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DaysContainerComponent, HeaderComponent, AddTodoFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
