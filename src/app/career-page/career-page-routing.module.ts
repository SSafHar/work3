import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { CustomJobComponent } from './custom-job/custom-job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent,
    children: [
      {path: ':id', component: JobDetailComponent},
      {path: '', component: CustomJobComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerPageRoutingModule {
}
