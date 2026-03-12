import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { EligibilityComponent } from '../eligibility/eligibility.component';
import { BlurbPipe } from '../../pipes/blurb.pipe';

@Component({
    selector: 'cc-what-is-camp-cadet',
    templateUrl: './what-is-camp-cadet.component.html',
    styleUrls: ['./what-is-camp-cadet.component.css'],
    imports: [DataWaiterComponent, EligibilityComponent, BlurbPipe]
})
export class WhatIsCampCadetComponent {
  dataService = inject(DataService);

  title = 'What is Camp Cadet';
  blurbName = this.title;
}