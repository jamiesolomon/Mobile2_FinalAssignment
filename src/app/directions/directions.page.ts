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
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  public map;
  public address;
  public location;
  public source = '';
  public destination = '';
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

  loadDirections() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.opts);
    this.directionsRenderer.setMap(this.map);
    this.calcRoute();
  }

  calcRoute() {
    this.directionsService.route(
      {
        origin: {
          query: this.source,
        },
        destination: {
          query: this.destination,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (res, status) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(res);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }

  geocodeLatLng(currentPosition) {
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({ location: currentPosition })
      .then((res) => {
        if (res.results[0]) {
          this.address = res.results[0].formatted_address;
          if (res.results[0].address_components.length > 0) {
            res.results[0].address_components.forEach((element) => {
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

  onPress(event: any) {
    if (event) {
      this.loadDirections();
    } else {
      this.loadMap();
    }
  }

  ngAfterViewInit(): void {
    this.geo
      .getCurrentPosition()
      .then((res) => {
        this.opts.center.lat = res.coords.latitude;
        this.opts.center.lng = res.coords.longitude;
        this.onPress(event);
      })
      .catch((err) => {
        console.log('location error', err);
      });
  }
}
