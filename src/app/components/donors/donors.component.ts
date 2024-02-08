import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent {
  blurbName = 'Donor Introduction';
  blurbNameBottom = 'Donors Bottom';

  constructor(public dataService: DataService) {
  }
}