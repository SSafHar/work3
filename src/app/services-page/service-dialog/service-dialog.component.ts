import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserData } from '../../../common/service.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {
  userData: UserData = {
    name: '',
    email: '',
    description: '',
    serviceTitle: ''
  };
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(public dialogRef: MatDialogRef<ServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private servicesService: ServicesService) {
  }

  ngOnInit() {
    this.userData.serviceTitle = this.data.title;
  }

  sendEmail() {
    this.servicesService.sendEmail(this.userData)
      .subscribe(() => {});
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
