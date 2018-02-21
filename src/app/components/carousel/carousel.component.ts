import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'cc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  rootUrl = 'http://localhost:64476/';
  images: string[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.carouselService.getBannerImages()
      .subscribe(data => data.forEach(i => this.images.push(this.rootUrl + i)));
  }
}
