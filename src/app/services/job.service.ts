import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Job } from '../../common/job.model';

@Injectable()
export class JobService {
  constructor(private http: HttpClient) {
  }

  getJobs() {
    return this.http.get<Job[]>(`api/job/list`);
  }

  getJobById(jobId) {
    return this.http.get<Job>(`api/job/${jobId}`);
  }
}
