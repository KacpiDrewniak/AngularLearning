import { Component, OnInit } from '@angular/core';
import { tasks as TASKS, Task } from '../../../tasks';
import {TaskService} from "../../services/task.service";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }
}
