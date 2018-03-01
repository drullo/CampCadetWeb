import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent extends BlurbEditable {
  title = 'Camp Cadet History';
  blurbName = 'Camp History';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
