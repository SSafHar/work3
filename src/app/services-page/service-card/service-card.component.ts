import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Service } from '../../../common/service.model';
import { ServiceDialogComponent } from '../service-dialog/service-dialog.component';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service: Service;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      data: this.service
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

}
