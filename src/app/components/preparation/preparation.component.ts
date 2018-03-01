import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent extends BlurbEditable {
  title = 'Preparing for Camp Cadet';
  blurbName = 'Camp Preparation';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
      super(dialog, authenticationService);
  }
}
