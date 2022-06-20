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
  @Output() onToggleReminderTask: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;
  text?: string;

  constructor() {}

  ngOnInit(): void {}

  onToggleReminder(task: Task) {
    this.onToggleReminderTask.emit(task);
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  changedValue(){
    console.log("click")
  }
}
