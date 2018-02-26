import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-required-items',
  templateUrl: './required-items.component.html',
  styleUrls: ['./required-items.component.css']
})
export class RequiredItemsComponent {
  title = 'Required Items';

  constructor(public dataService: DataService) { }
}
