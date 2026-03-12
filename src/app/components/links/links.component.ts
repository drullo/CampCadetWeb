import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { LinkForCategoryPipe } from '../../pipes/link-for-category.pipe';

@Component({
    selector: 'cc-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, BlurbPipe, LinkForCategoryPipe]
})
export class LinksComponent {
  dataService = inject(DataService);

  title = 'Useful Links';
  blurbName = 'Useful Links Introduction';
}