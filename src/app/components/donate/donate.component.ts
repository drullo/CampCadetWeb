//#region Imports
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { DataService } from '@campcadet/services/data.service';
//#endregion

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
    public authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }

  paypalSubmit(form: any, e: any): void {
    e.target.submit();
  }

  calculateDonation(val): void {
    this.donation = val ? +val + ((+val * .022) + .3) : null;
  }
}
