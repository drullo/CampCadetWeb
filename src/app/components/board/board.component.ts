import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { MemberForCategoryPipe } from '../../pipes/member-for-category.pipe';

@Component({
    selector: 'cc-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, BlurbPipe, MemberForCategoryPipe
    ]
})
export class BoardComponent {
  dataService = inject(DataService);

  title = 'Board of Directors';
  blurbName = 'Board Introduction';
}