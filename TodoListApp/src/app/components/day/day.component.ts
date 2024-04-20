import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {

}
