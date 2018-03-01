import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent extends BlurbEditable {
  title = 'Donation Information';
  blurbName = 'Donations';
  donation: number;

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }

  paypalSubmit(form: any, e: any): void {
    e.target.submit();
  }

  calculateDonation(val): void {
    this.donation = val ? +val + ((+val * .022) + .3) : null;
  }
}
