import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyLocation } from '../../common/company-location.model';

@Injectable()
export class CompanyLocationService {
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<CompanyLocation[]>(`api/location/list`);
  }
}
