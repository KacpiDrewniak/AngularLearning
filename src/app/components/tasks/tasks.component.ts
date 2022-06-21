import { Component, OnInit } from '@angular/core';
import { tasks as TASKS, Task } from '../../../../database/tasks';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  toggleReminder(task: Task) {
    this.tasksService.toggleReminder(task);
    this.tasks = this.tasksService.getTasks();
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task);
    this.tasks = this.tasksService.getTasks();
  }

  addTask(task: Task) {
    this.tasksService.addTask(task);
    this.tasks = this.tasksService.getTasks();
  }
}
