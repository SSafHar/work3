import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../common/service.model';

@Injectable()
export class ServicesService {
  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<Service[]>(`api/service/list`);
  }

  sendEmail(userData) {
    return this.http.post(`/api/email`, userData);
  }
}
