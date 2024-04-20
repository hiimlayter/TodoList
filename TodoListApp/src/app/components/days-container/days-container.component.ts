import { Component, OnInit } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TodoService } from '../../services/todo/todo.service';
import { CommonModule, NgFor } from '@angular/common';
import { Todo } from '../../app.component';

@Component({
  selector: 'app-days-container',
  standalone: true,
  imports: [DayComponent, ToolbarComponent, NgFor, CommonModule],
  templateUrl: './days-container.component.html',
  styleUrl: './days-container.component.css'
})
export class DaysContainerComponent implements OnInit{
  todoList: Todo[] = []
  dates: string[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todoService.refreshNeeded$.subscribe(() => {
      this.getTodos();
    });

    this.getTodos();
  }

  getTodoItemsByDate(date: string): Todo[] {
    return this.todoList.filter(todo => todo.Date.split('T')[0] == date)
  }

  getTodos(){
    this.todoService.getTodos().subscribe({
      next: (response) => {
        this.todoList = response
        this.todoList.forEach(todo => {
          if (!this.dates.includes(todo.Date.split('T')[0])) {
            this.dates.push(todo.Date.split('T')[0])
          }
        });
      },  
      error: () => {
      },
    });
  }
}
