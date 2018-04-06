import { Component, OnInit } from '@angular/core';
import { Service } from '../../../common/service.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getServices().subscribe((services) => this.services = services);
  }
}
