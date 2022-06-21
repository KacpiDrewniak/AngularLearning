import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}
  openInfoModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100%',
      data: '',
    });
  }

  closeInfoModal(){
    this.dialog.closeAll()

  }

  openWarningModal() {}
  openErrorModal() {}
  openConfirmModal() {}
}
