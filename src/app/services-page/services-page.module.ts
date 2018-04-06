import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ServicesComponent,
    ServiceCardComponent,
    ServiceDialogComponent
  ],
  entryComponents: [
    ServiceDialogComponent
  ]
})
export class ServicesPageModule {
}
