import { Component, OnInit } from '@angular/core';
import { Job } from '../../../common/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
