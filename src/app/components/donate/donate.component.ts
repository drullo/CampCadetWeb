import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  title = 'Donation Information';
  donation: number;

  constructor(public dataService: DataService) { }

  paypalSubmit(form: any, e: any): void {
    e.target.submit();
  }

  calculateDonation(val): void {
    this.donation = val ? +val + ((+val * .022) + .3) : null;
  }
}
