import { AuthenticationService } from '@campcadet/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from '@campcadet/services/data.service';

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
    public authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
