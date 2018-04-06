import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamPageRoutingModule } from './team-page-routing.module';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    CommonModule,
    TeamPageRoutingModule,
    SharedModule
  ],
  declarations: [
    TeamComponent,
    TeamMemberComponent
  ]
})
export class TeamPageModule {
}
