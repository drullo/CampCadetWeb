import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import emailjs from '@emailjs/browser';
import { config } from '../../config';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showFooter = true;

  //#region Lifecycle
  constructor(public dataService: DataService, private route: ActivatedRoute) {
    emailjs.init({
      publicKey: config.emailJs.publicKey
    });
  }

  ngOnInit(): void {
    this.dataService.getData();
  }
  //#endregion

  routeActivate(event: any): void {
    const isPrint = window.location.href.includes('/print');
    this.showFooter = !isPrint;
    //this.showFooter = true;
  }
}