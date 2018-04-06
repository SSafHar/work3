import { Component, OnInit } from '@angular/core';
import { CompanyLocation } from '../../../common/company-location.model';
import { CompanyLocationService } from '../../services/company-location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  locations: CompanyLocation[];
  selectedLocation: CompanyLocation;

  constructor(private locationService: CompanyLocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
      this.selectedLocation = locations[0];
    });
  }

  selectLocation(location: CompanyLocation) {
    this.selectedLocation = location;
  }
}
