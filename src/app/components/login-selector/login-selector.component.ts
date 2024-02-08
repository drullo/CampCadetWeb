import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cc-login-selector',
  templateUrl: './login-selector.component.html',
  styleUrls: ['./login-selector.component.css']
})
export class LoginSelectorComponent {

  constructor(public dialogRef: MatDialogRef<LoginSelectorComponent>) { }
}