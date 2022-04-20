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
  public address;
  public location;
  public opts = {
    center: { lat: 43.653225, lng: -79.383186 },
    zoom: 8,
  };

  constructor(private geo: Geolocation) {}

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.opts);
    const mark = new google.maps.Marker({
      position: this.opts.center,
      map: this.map,
      title: 'Current Location',
    });
    this.geocodeLatLng(this.opts.center);
  }

  geocodeLatLng(currentPosition) {
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({ location: currentPosition })
      .then((response) => {
        if (response.results[0]) {
          this.address = response.results[0].formatted_address;
          if (response.results[0].address_components.length > 0) {
            response.results[0].address_components.forEach((element) => {
              if (element.types.indexOf('locality') !== -1) {
                this.location = element.short_name;
              }
            });
          }
          this.map.setZoom(11);
          const marker = new google.maps.Marker({
            position: currentPosition,
            map: this.map,
          });
        } else {
          window.alert('No results found');
        }
      })
      .catch((e) => window.alert('Geocoder failed due to: ' + e));
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
