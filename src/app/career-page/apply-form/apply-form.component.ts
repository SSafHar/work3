import { Component, Input } from '@angular/core';
import { Job } from '../../../common/job.model';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {
  @Input() job: Job;
}
