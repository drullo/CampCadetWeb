//#region Imports
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
//#endregion

@Component({
  selector: 'cc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  scrollDownText = 'Scroll down for enrollment info and details about our camp...';
  banner = {
    landscape: [
      '/assets/banner/landscape/radar.jpg',
      '/assets/banner/landscape/girl-ball.jpg',
      '/assets/banner/landscape/dog-smile.jpg',
      '/assets/banner/landscape/k9.jpg',
      '/assets/banner/landscape/water-bottle.jpg',
      '/assets/banner/landscape/boy-ball.jpg',
      '/assets/banner/landscape/handcuffs.jpg',
      '/assets/banner/landscape/car.jpg',
      '/assets/banner/landscape/armor.jpg',
      '/assets/banner/landscape/marchine.jpg',
      '/assets/banner/landscape/med-evac.jpg',
      '/assets/banner/landscape/trooper-salute.jpg'
    ],
    portrait: [
      '/assets/banner/portrait/psp-hellicopter.jpg',
      '/assets/banner/portrait/bear-kid.jpg',
      '/assets/banner/portrait/kid-cert.jpg',
      '/assets/banner/portrait/gym-formation.jpg',
      '/assets/banner/portrait/bird.jpg',
      '/assets/banner/portrait/bearcat-front.jpg',
      '/assets/banner/portrait/bearcat-side.jpg',
      '/assets/banner/portrait/fire-gear2.jpg',
      '/assets/banner/portrait/psp-cert.jpg',
      '/assets/banner/portrait/cert-carry.jpg',
      '/assets/banner/portrait/fire-gear.jpg',
      '/assets/banner/portrait/trooper-salute.jpg'
    ]
  };

  constructor(public dataService: DataService) { }

  /*editCampDates(): void {
    if (!this.authenticationService.loggedIn) { return; }
    this.dialog.open(CampDatesComponent);
  }*/
}