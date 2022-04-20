/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import data from '../data.js';
import { NavServiceService } from '../nav-service.service';

interface restaurantData {
  id: Number;
  name: String;
  address: String;
  number: Number;
  desc: String;
  cuisine_type: String;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  name = 'Angular';
  info: restaurantData[] = data;
  filterTerm: string;
  restaurants;
  loading = true;
  constructor(private navService: NavServiceService) {}


  ngOnInit(): void {
    this.getData();

  }
  getNavData(){
    this.navService.setNavData(JSON.stringify(this.info));
  }
  async getData(){
    const {value} = await Storage.get({key: 'restaurants'});

    if(value){
      this.restaurants = JSON.parse(value);
    }
    else{
      this.restaurants = [];
    }

    this.loading = false;
    console.log('loading done:', this.restaurants);

  }

  async delete(name){
    this.restaurants = this.restaurants.filter((e) => {
      if(e.name === name){
        return false;
      }
      else{
        return true;
      }

    });

    await Storage.set({key: 'restaurants', value: JSON.stringify(this.restaurants)});


  }



}
