import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  title = 'Board of Directors';
  blurbName = 'Board Introduction';

  constructor(public dataService: DataService) {}
}