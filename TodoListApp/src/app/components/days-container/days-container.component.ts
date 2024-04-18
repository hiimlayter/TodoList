import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-days-container',
  standalone: true,
  imports: [DayComponent, ToolbarComponent],
  templateUrl: './days-container.component.html',
  styleUrl: './days-container.component.css'
})
export class DaysContainerComponent {

}
