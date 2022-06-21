import { Injectable, OnInit } from '@angular/core';
import { tasks as TASKS, Task } from '../../../database/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService implements OnInit {
  ngOnInit(): void {}

  tasks: Task[] = TASKS;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

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
