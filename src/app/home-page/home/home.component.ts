import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../common/home-banner.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getBanners().subscribe((banners) => this.banners = banners);
  }
}
