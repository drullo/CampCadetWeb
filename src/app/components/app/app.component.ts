import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';
import { config } from '../../config';
import { DataService } from '../../services/data.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'cc-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent]
})
export class AppComponent {
  dataService = inject(DataService);
  private route = inject(ActivatedRoute);

  showFooter = true;

  //#region Lifecycle
  constructor() {
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