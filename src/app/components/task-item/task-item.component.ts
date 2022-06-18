import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../tasks';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
