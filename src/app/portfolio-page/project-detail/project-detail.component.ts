import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectItem } from '../../../common/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: ProjectItem;
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.route.params
        .subscribe((params) => this.getPortfolioItemById(params.id));
  }

  private getPortfolioItemById(projectId) {
    this.portfolioService.getPortfolioItemById(projectId)
        .subscribe((project) => this.project = project);
  }
}
