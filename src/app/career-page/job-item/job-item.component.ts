import { Component, Input } from '@angular/core';
import { Job } from '../../../common/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent {
  @Input() job: Job;
}
