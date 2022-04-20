/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import data from '../data.js';
import { ActivatedRoute } from '@angular/router';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private navService: NavServiceService) { }

  ngOnInit(): void {
    // this.data = this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // );
    this.data  = this.navService.getNavData();
  }

}
