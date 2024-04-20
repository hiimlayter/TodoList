import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../app.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  
  @Input() todo: Todo | null;
  
  constructor() {
    this.todo = null;
  }
  
  ngOnInit(): void {
  }
}
