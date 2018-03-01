import { AuthenticationService } from './../../services/authentication.service';
import { BlurbEditable } from './../../model/blurb-editable';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-call-of-honor',
  templateUrl: './call-of-honor.component.html',
  styleUrls: ['./call-of-honor.component.css']
})
export class CallOfHonorComponent extends BlurbEditable {
  title = 'Call of Honor';
  blurbName = 'Call of Honor Introduction';
  blurbNameCoh = 'Call of Honor';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
