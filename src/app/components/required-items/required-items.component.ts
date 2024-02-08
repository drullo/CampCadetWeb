import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-required-items',
  templateUrl: './required-items.component.html',
  styleUrls: ['./required-items.component.css']
})
export class RequiredItemsComponent {
  title = 'Required Items';
  blurbName = 'Camp Supplies Introduction';

  constructor(public dataService: DataService) {}
}