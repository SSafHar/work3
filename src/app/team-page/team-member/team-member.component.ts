import { Component, Input } from '@angular/core';
import { TeamMember } from '../../../common/team-member.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {
  @Input() teamMember: TeamMember;
}
