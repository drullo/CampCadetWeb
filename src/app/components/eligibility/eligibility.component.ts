import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent extends BlurbEditable {
  title = 'Eligibility Requirements';
  blurbName = 'Eligibility';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
