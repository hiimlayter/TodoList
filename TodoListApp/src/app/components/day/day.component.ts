import { Component, Input, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../app.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [TodoItemComponent, NgFor],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit{
  @Input() date: string;
  @Input() todoList: Todo[];

  constructor() {
    this.date = "";
    this.todoList = [];
  }
  ngOnInit(): void {
    console.log(this.todoList);
  }

}
