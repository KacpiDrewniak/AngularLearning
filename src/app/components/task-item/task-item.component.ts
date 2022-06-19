import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../../database/tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    console.log('123');
    console.log(task);
    this.onDeleteTask.emit(task);
  }
}
