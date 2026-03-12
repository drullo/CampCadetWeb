import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { DonorCatLinksInLevelPipe } from '../../pipes/donor-cat-links-in-level.pipe';

@Component({
    selector: 'cc-donors',
    templateUrl: './donors.component.html',
    styleUrls: ['./donors.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, BlurbPipe, DonorCatLinksInLevelPipe]
})
export class DonorsComponent {
  dataService = inject(DataService);

  blurbName = 'Donor Introduction';
  blurbNameBottom = 'Donors Bottom';
}