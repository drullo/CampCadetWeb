import { PrintComponent } from './components/print/print.component';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showFooter: boolean;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData();
  }

  routeActivate(event): void {
    // this.showFooter = event.route && event.route.component !== PrintComponent;
    this.showFooter = true;
  }
}
