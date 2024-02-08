import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  title = 'Camp Rules';
  blurbName = 'Camp Rules Introduction';

  constructor(public dataService: DataService) {}
}