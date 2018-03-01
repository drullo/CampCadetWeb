import { BlurbEditable } from './../../model/blurb-editable';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent extends BlurbEditable {
  title = 'Useful Links';
  blurbName = 'Useful Links Introduction';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
      super(dialog, authenticationService);
    }
}
