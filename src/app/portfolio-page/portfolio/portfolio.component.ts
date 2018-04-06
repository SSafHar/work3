import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../../../common/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  portfolio: ProjectItem[];
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.getPortfolio();
  }

  private getPortfolio() {
    this.portfolioService.getPortfolio().subscribe((portfolio) => {
      this.portfolio = portfolio;
    });
  }
}

