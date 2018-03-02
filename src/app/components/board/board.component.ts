import { AuthenticationService } from '@campcadet/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { BlurbEditable } from '@campcadet/model/blurb-editable';
import { Component } from '@angular/core';
import { DataService } from '@campcadet/services/data.service';

@Component({
  selector: 'cc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent extends BlurbEditable {
  title = 'Board of Directors';
  blurbName = 'Board Introduction';

  constructor(public dataService: DataService,
    dialog: MatDialog,
    authenticationService: AuthenticationService) {
    super(dialog, authenticationService);
  }
}
