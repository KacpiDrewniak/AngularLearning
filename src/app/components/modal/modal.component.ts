import { Component, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  text?: string;
  day?: string;
  reminder: boolean = false;

  toggleAddTask() {
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder,
    }
    this.modalService.closeInfoModal()
  }

  ngOnInit(): void {}
}
