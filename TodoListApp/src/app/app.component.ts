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
  Id: number;
  Title: string;
  Description: string;
  IsDone: boolean;
  Date: string;
  constructor(id: number, title: string, description: string, date: string, isDone: boolean = true){
    this.Id = id;
    this.Title = title;
    this.Description = description;
    this.IsDone = isDone;
    this.Date = date;
  }
}
