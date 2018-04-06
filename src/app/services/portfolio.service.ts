import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectItem, SlidableProject } from '../../common/portfolio.model';

@Injectable()
export class PortfolioService {
  constructor(private http: HttpClient) { }

  getPortfolio() {
    return this.http.get<ProjectItem[]>(`api/project/list`);
  }

  getPortfolioItemById(projectId) {
    return this.http.get<SlidableProject>(`api/project/${projectId}`);
  }
}
