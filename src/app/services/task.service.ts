import { Injectable } from '@angular/core';
import {tasks,Task} from "../../tasks";

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  constructor() {}

  getTasks(): Task[]{
    return tasks
  }
}
