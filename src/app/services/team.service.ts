import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamMember } from '../../common/team-member.model';

@Injectable()
export class TeamService {
  constructor(private http: HttpClient) { }

  getTeamMembers() {
    return this.http.get<TeamMember[]>(`api/team/list`);
  }
}
