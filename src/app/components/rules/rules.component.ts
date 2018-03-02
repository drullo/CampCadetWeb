//#region Imports
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { DataService } from '@campcadet/services/data.service';
//#endregion

@Component({
  selector: 'cc-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent extends BlurbEditable {
  title = 'Camp Rules';
  blurbName = 'Camp Rules Introduction';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    public authenticationService: AuthenticationService) {
      super(dialog, authenticationService);
    }
}
