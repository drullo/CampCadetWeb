import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  title = 'Donation Information';
  blurbName = 'Donations';
  donation: number | undefined;

  constructor(public dataService: DataService) {}

  paypalSubmit(form: any, e: any): void {
    e.target.submit();
  }

  /*calculateDonation(val: number): void {
    this.donation = val ? +val + ((+val * .022) + .3) : undefined;
  }*/
  calculateDonation(val: any): void {
    console.log(val);
  }
}