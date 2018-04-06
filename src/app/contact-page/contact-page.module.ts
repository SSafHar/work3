import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { OfficeLocationComponent } from './office-location/office-location.component';

@NgModule({
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ],
  declarations: [
    ContactComponent,
    OfficeLocationComponent,
    MapComponent
  ]
})
export class ContactPageModule {
}
