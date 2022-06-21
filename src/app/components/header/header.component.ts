import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  toggleAddTask() {
    this.modalService.openInfoModal();
  }
}
