import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-data-waiter',
  templateUrl: './data-waiter.component.html',
  styleUrls: ['./data-waiter.component.css']
})
export class DataWaiterComponent {
  constructor(public dataService: DataService) { }
}
