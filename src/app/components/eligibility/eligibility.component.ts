import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {
  title = 'Eligibility Requirements';
  blurbName = 'Eligibility';

  constructor(public dataService: DataService) {
  }
}