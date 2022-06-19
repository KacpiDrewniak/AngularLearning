import { Component, OnInit } from '@angular/core';
import { tasks as TASKS, Task } from '../../../../database/tasks';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        (tasks) => () =>
          (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
