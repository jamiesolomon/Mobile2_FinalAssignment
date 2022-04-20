import { Component, OnInit } from '@angular/core';
import data from '../data.js'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  home!:data

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
