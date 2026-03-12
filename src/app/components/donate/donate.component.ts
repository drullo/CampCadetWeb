import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { DataService } from '../../services/data.service';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'cc-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, FormsModule, MatFormField, MatInput, MatHint, MatPrefix, MatSuffix, CurrencyPipe, BlurbPipe
    ]
})
export class DonateComponent {
  dataService = inject(DataService);

  title = 'Donation Information';
  blurbName = 'Donations';
  donation?: number;

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