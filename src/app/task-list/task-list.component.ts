import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: string[] = [];
  nueva: string = ''; 

  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask():void {
    this.tasks.push(this.nueva);
    this.nueva = ''; 
    
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);

  }
}
