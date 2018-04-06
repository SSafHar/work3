import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CompanyLocationService } from './company-location.service';
import { HomeService } from './home.service';
import { JobService } from './job.service';
import { MainInterceptorService } from './main-interceptor.service';
import { PortfolioService } from './portfolio.service';
import { ServicesService } from './services.service';
import { TeamService } from './team.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptorService,
      multi: true
    },
    TeamService,
    ServicesService,
    CompanyLocationService,
    JobService,
    PortfolioService,
    HomeService
  ]
})
export class ServicesModule {
}
