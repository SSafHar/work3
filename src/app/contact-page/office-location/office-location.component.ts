import { Component, Input } from '@angular/core';
import { CompanyLocation } from '../../../common/company-location.model';

@Component({
  selector: 'app-office-location',
  templateUrl: './office-location.component.html',
  styleUrls: ['./office-location.component.scss']
})
export class OfficeLocationComponent {
  @Input() location: CompanyLocation;
}
