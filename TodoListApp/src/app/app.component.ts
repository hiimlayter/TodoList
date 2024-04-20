import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoListApp';
}

export class Todo{
  Title: string;
  Description: string;
  IsDone: boolean;
  Date: Date;
  constructor(title: string, description: string, date: Date, isDone: boolean = true){
    this.Title = title;
    this.Description = description;
    this.IsDone = isDone;
    this.Date = date;
  }
}
