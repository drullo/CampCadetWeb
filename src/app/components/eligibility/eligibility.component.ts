import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BlurbPipe } from '../../pipes/blurb.pipe';

@Component({
    selector: 'cc-eligibility',
    templateUrl: './eligibility.component.html',
    styleUrls: ['./eligibility.component.css'],
    imports: [BlurbPipe]
})
export class EligibilityComponent {
  dataService = inject(DataService);

  title = 'Eligibility Requirements';
  blurbName = 'Eligibility';
}