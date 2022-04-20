import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddRestaurantPage } from './add-restaurant/add-restaurant.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-restaurant',
    loadChildren: () =>
      import('./add-restaurant/add-restaurant.module').then(
        (m) => m.AddRestaurantPageModule
      ),
    component: AddRestaurantPage,
  },
  {
    path: 'restaurant-details',
    loadChildren: () =>
      import('./restaurant-details/restaurant-details.module').then(
        (m) => m.RestaurantDetailsPageModule
      ),
  },
  {
    path: 'directions',
    loadChildren: () =>
      import('./directions/directions.module').then(
        (m) => m.DirectionsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
