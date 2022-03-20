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
    {id: 1, task: "Make Laura's birthday cake.", completed: false},
    {id: 2, task: "Do the laundry.", completed: false},
    {id: 3, task: "Wash the dishes", completed: false},
  ]
}
