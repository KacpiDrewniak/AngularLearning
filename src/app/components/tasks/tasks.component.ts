import { Component, OnInit } from '@angular/core';
import { tasks as TASKS, Task } from '../../../../database/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
