import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MenuComponent } from '../menu/menu.component';
import { PromoVideoComponent } from '../promo-video/promo-video.component';
import { WhatIsCampCadetComponent } from '../what-is-camp-cadet/what-is-camp-cadet.component';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
    selector: 'cc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        CarouselComponent, WhatIsCampCadetComponent, PromoVideoComponent, MenuComponent, QrCodeComponent]
})
export class HomeComponent {
}