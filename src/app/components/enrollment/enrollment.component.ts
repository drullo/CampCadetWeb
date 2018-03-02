import { AuthenticationService } from '@campcadet/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from '@campcadet/services/data.service';

@Component({
  selector: 'cc-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent extends BlurbEditable {
  title = 'Camp Enrollment';
  blurbName = 'Sign Up';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    public authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
