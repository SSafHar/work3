import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApplyFormComponent } from './apply-form/apply-form.component';

import { CareerPageRoutingModule } from './career-page-routing.module';
import { CareerComponent } from './career/career.component';
import { CustomJobComponent } from './custom-job/custom-job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobItemComponent } from './job-item/job-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CareerPageRoutingModule
  ],
  declarations: [
    CareerComponent,
    JobDetailComponent,
    ApplyFormComponent,
    JobItemComponent,
    CustomJobComponent
  ]
})
export class CareerPageModule {
}
