//#region Imports
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { DataService } from '@campcadet/services/data.service';
//#endregion

@Component({
  selector: 'cc-required-items',
  templateUrl: './required-items.component.html',
  styleUrls: ['./required-items.component.css']
})
export class RequiredItemsComponent extends BlurbEditable {
  title = 'Required Items';
  blurbName = 'Camp Supplies Introduction';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    public authenticationService: AuthenticationService) {
      super(dialog, authenticationService);
    }
}
