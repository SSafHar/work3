import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../common/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: Job;
  applyFormOpened = false;

  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.applyFormOpened = false;
      this.getJobById(params.id);
    });
  }

  openApplyForm() {
    this.applyFormOpened = !this.applyFormOpened;
  }

  private getJobById(jobId) {
    this.jobService.getJobById(jobId).subscribe(job => this.job = job);
  }

}
