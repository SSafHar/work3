import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: 'app/home-page/home-page.module#HomePageModule'},
  {path: 'services', loadChildren: 'app/services-page/services-page.module#ServicesPageModule'},
  {path: 'portfolio', loadChildren: 'app/portfolio-page/portfolio-page.module#PortfolioPageModule'},
  {path: 'team', loadChildren: 'app/team-page/team-page.module#TeamPageModule'},
  {path: 'career', loadChildren: 'app/career-page/career-page.module#CareerPageModule'},
  {path: 'contact', loadChildren: 'app/contact-page/contact-page.module#ContactPageModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
