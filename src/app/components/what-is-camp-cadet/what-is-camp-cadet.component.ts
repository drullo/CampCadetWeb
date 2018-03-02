//#region Imports
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { DataService } from '@campcadet/services/data.service';
//#endregion

@Component({
  selector: 'cc-what-is-camp-cadet',
  templateUrl: './what-is-camp-cadet.component.html',
  styleUrls: ['./what-is-camp-cadet.component.css']
})
export class WhatIsCampCadetComponent extends BlurbEditable {
  title = 'What is Camp Cadet';
  blurbName = this.title;

  constructor(public dataService: DataService,
    dialog: MatDialog,
    public authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
