import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import data from '../data.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  restaurants;
  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    var { value } = await Storage.get({ key: 'restaurants' });

    if (value) {
      this.restaurants = JSON.parse(value);
    } else {
      this.restaurants = [];
    }

    this.loading = false;
    console.log('loading done:', this.restaurants);
  }

  async delete(name) {
    this.restaurants = this.restaurants.filter((e) => {
      if (e.name == name) {
        return false;
      } else {
        return true;
      }
    });

    await Storage.set({
      key: 'restaurants',
      value: JSON.stringify(this.restaurants),
    });
  }
}
