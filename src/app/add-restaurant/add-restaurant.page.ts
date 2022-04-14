import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  name: String = "";
  phoneNumber: String = "";
  address: String = "";
  description: String = "";
  city: String = "";
  tags: String[] = [];

  restaurants;

  constructor() { }

  ngOnInit() {
    this.getData()

  }

  async getData(){
    var {value} = await Storage.get({key: 'restaurants'})

    if(value){
      this.restaurants = JSON.parse(value)
    }
    else{
      this.restaurants = [];
    }

  }

  

  handleRestaurantTags(input){
    this.tags = input.split(",");
  }

  async submit(){
    //save all input values as a resturant object

    //await Storage.set({key: 'name', value: this.name})

    var restaurant = {name: this.name, address: this.address, city: this.city, phoneNumber: this.phoneNumber, description: this.description, tags: this.tags}
    this.restaurants.push(restaurant)
    
    await Storage.set({key: 'restaurants', value: JSON.stringify(this.restaurants)})

    console.log(this.address, this.city, this.description, this.name, this.tags, this.phoneNumber)

  }



}
