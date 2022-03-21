import { Component } from '@angular/core';
import { Tasks } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks App';

  tasksArray: Tasks[] = [
    {id: 1, task: "Make Laura's birthday cake.", note: "Remember to buy especial chocolate for cover", date:"today", completed: false},
    {id: 2, task: "Do the laundry.", note: "At noon, when it's cheaper", date:"today", completed: false},
    {id: 3, task: "Wash the dishes", note: "", date:"today", completed: false},
  ]

  selectedTask: Tasks = new Tasks();

}
