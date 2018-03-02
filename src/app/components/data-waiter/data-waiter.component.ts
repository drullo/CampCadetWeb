import { DataService } from '@campcadet/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'cc-data-waiter',
  templateUrl: './data-waiter.component.html',
  styleUrls: ['./data-waiter.component.css']
})
export class DataWaiterComponent {
  constructor(public dataService: DataService) { }
}
