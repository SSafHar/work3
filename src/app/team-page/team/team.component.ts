import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../../common/team-member.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamMembers().subscribe((team) => this.teamMembers = team);
  }
}
