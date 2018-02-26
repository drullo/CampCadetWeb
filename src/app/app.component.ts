import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData();
  }
}
