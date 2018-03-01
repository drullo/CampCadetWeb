import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from './../../model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

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
    authenticationService: AuthenticationService) {
      super(dialog, authenticationService);
    }
}
