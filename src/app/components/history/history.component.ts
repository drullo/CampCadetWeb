import { Component, inject } from '@angular/core';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { DataService } from '../../services/data.service';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'cc-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, BlurbPipe]
})
export class HistoryComponent {
  dataService = inject(DataService);

  title = 'Camp Cadet History';
  blurbName = 'Camp History';
}