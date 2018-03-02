//#region Imports
import { Component, OnInit } from '@angular/core';
import { DataService } from '@campcadet/services/data.service';
import { PrintComponent } from '@campcadet/components/print/print.component';
//#endregion

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showFooter: boolean;

  //#region Lifecycle
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData();
  }
  //#endregion

  routeActivate(event): void {
    // this.showFooter = event.route && event.route.component !== PrintComponent;
    this.showFooter = true;
  }
}
