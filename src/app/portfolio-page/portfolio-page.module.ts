import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortfolioPageRoutingModule,
  ],
  declarations: [
    PortfolioComponent,
    ProjectDetailComponent,
    ImageSliderComponent,
    ProjectItemComponent
  ]
})
export class PortfolioPageModule {
}
