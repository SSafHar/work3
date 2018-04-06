import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../../common/home-banner.model';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  getBanners() {
    return this.http.get<Banner[]>(`api/home/list`);
  }
}
