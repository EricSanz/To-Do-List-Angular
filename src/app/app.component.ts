import { Component, ViewChild, ElementRef } from '@angular/core';
import { Tasks } from './models/tasks';
import { FormsModule } from '@angular/forms';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tasks App';

  todayTasksArray: Tasks[] = [
    {id: 1, task: "Make Laura's birthday cake.", note: "Remember to buy especial chocolate for cover", date:"today", completed: false},
    {id: 2, task: "Wash the dishes", note: "", date:"today", completed: true},
    {id: 3, task: "Get homework done before go to the movies", note: "4 maths exercises and an english reading comprehension", date:"today", completed: false},
  ]
  
  tomorrowTasksArray: Tasks[] = [
    {id: 1, task: "Do the laundry.", note: "At noon, when it's cheaper", date:"tomorrow", completed: false},
  ]

  weekTasksArray: Tasks[] = [
  ]

  faDelete = faWindowClose;

  selectedTask: Tasks = new Tasks();
  
  addTask(): void {
    if (!this.selectedTask.id) {
      if (this.selectedTask.date === 'today') {
        const found = this.todayTasksArray.find(task => task.task === this.selectedTask.task);
        found === undefined ? (
          this.selectedTask.id = this.todayTasksArray.length + 1 &&
          this.todayTasksArray.push(this.selectedTask)
        ) : null;
      } else if (this.selectedTask.date === 'tomorrow') {
        const found = this.tomorrowTasksArray.find(task => task.task === this.selectedTask.task);
        found === undefined ? (
          this.selectedTask.id = this.tomorrowTasksArray.length + 1 &&
          this.tomorrowTasksArray.push(this.selectedTask)
        ) : null;
      } else {
        const found = this.weekTasksArray.find(task => task.task === this.selectedTask.task);
        found === undefined ? (
          this.selectedTask.id = this.weekTasksArray.length + 1 &&
          this.weekTasksArray.push(this.selectedTask)
        ) : null;
      }
    }
    this.selectedTask = new Tasks();
  }

  editTask(task: Tasks): void {
    this.selectedTask = task;
  }

  saveEditTask(task: Tasks): void {
    if (task.date === 'today') {
      this.tomorrowTasksArray = this.tomorrowTasksArray.filter(list => list !== this.selectedTask);
      this.weekTasksArray = this.weekTasksArray.filter(list => list !== this.selectedTask);
      const found = this.todayTasksArray.find(task => task.task === this.selectedTask.task);
      if (found === undefined) {
        this.selectedTask.id = this.todayTasksArray.length + 1;
        this.todayTasksArray.push(this.selectedTask);
        this.selectedTask = new Tasks();
      } else {
        this.selectedTask = new Tasks();
      }
    } else if (task.date === 'tomorrow') {
      this.todayTasksArray = this.todayTasksArray.filter(list => list !== this.selectedTask);
      this.weekTasksArray = this.weekTasksArray.filter(list => list !== this.selectedTask);
      const found = this.tomorrowTasksArray.find(task => task.task === this.selectedTask.task);
      if (found === undefined) {
        this.selectedTask.id = this.tomorrowTasksArray.length + 1;
        this.tomorrowTasksArray.push(this.selectedTask);
        this.selectedTask = new Tasks();
      } else {
        this.selectedTask = new Tasks();
      }

    } else if (task.date === 'week') {
      this.todayTasksArray = this.todayTasksArray.filter(list => list !== this.selectedTask);
      this.tomorrowTasksArray = this.tomorrowTasksArray.filter(list => list !== this.selectedTask);
      const found = this.weekTasksArray.find(task => task.task === this.selectedTask.task);
      if (found === undefined) {
        this.selectedTask.id = this.weekTasksArray.length + 1;
        this.weekTasksArray.push(this.selectedTask);
        this.selectedTask = new Tasks();
      } else {
        this.selectedTask = new Tasks();
      }
    }
  }

  deleteTask(): void {
    this.todayTasksArray = this.todayTasksArray.filter(list => list !== this.selectedTask);
    this.tomorrowTasksArray = this.tomorrowTasksArray.filter(list => list !== this.selectedTask);
    this.weekTasksArray = this.weekTasksArray.filter(list => list !== this.selectedTask);
    this.selectedTask = new Tasks();
  }

}
