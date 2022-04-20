import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { Geolocation } from '@awesome-cordova-plugins/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavServiceService } from './nav-service.service';

//need to import storage

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Geolocation,
    NavServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ], //add providor for storage
  bootstrap: [AppComponent],
})
export class AppModule {}
