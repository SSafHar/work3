import { Component, HostBinding, Input } from '@angular/core';
import { ProjectItem } from '../../../common/portfolio.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() project: ProjectItem;
}
