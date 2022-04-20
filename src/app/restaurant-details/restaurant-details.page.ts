/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  info: any;

  constructor(private route: ActivatedRoute, private router: Router, private navService: NavServiceService) { }

  ngOnInit(): void {
    this.info = this.navService.getNavData();
  }

}
