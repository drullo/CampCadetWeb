import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'cc-login-selector',
    templateUrl: './login-selector.component.html',
    styleUrls: ['./login-selector.component.css'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton]
})
export class LoginSelectorComponent {  dialogRef = inject<MatDialogRef<LoginSelectorComponent>>(MatDialogRef);

}