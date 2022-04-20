import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare let google;

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapElement;
  public map;
  public opts = {
    center: { lat: 43.653225, lng: -79.383186 },
    zoom: 8,
  };

  constructor(private geo: Geolocation) {}

  loadMap() {
    const map = new google.maps.Map(this.mapElement.nativeElement, this.opts);
    const mark = new google.maps.Marker({
      position: this.opts.center,
      map,
      title: 'Current Location',
    });
  }

  ngAfterViewInit(): void {
    this.geo
      .getCurrentPosition()
      .then((res) => {
        this.opts.center.lat = res.coords.latitude;
        this.opts.center.lng = res.coords.longitude;
        this.loadMap();
      })
      .catch((err) => {
        console.log('location error', err);
      });
  }
}
