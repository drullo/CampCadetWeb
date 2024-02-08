import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  title = 'Useful Links';
  blurbName = 'Useful Links Introduction';

  constructor(public dataService: DataService) {}
}