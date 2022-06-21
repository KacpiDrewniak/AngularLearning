import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../../../database/tasks';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private tasksService: TasksService
  ) {}
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  toggleAddTask() {
    const newTask: Task = {
      id: 2,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.modalService.closeInfoModal();
    this.tasksService.addTask(newTask);
  }

  ngOnInit(): void {}
}
