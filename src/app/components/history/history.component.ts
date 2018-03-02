//#region Imports
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { DataService } from '@campcadet/services/data.service';
//#endregion

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
    public authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
