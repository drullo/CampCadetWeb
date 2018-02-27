import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cc-login-selector',
  templateUrl: './login-selector.component.html',
  styleUrls: ['./login-selector.component.css']
})
export class LoginSelectorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginSelectorComponent>) { }

  ngOnInit() {
  }

}
