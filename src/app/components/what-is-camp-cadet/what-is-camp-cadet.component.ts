import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';
import { AuthenticationService } from '../../services/authentication.service';

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
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
