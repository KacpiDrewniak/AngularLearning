import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../../../database/tasks";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})

export class AddTaskComponent implements OnInit {

  @Output() onAddTask:EventEmitter<Task> = new EventEmitter<Task>()

  text?: string;
  day?: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task !');
      return;
    }
    if (!this.day) {
      alert('Please add a day');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
