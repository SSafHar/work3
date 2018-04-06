import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { Coordinates } from '../../../common/company-location.model';
import * as STYLES from './styles.json';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() coordinates: Coordinates;

  private map;
  private marker;
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.map = new google.maps.Map(this.element.nativeElement, {
      center: this.coordinates,
      zoom: 10,
      styles: STYLES
    });
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map
    });
  }

  ngOnChanges(changes) {
    if(!changes.coordinates || !this.map) {
      return;
    }
    this.map.setCenter(this.coordinates);
    this.marker.setPosition(this.coordinates);
  }

}
