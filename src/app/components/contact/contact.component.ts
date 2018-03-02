//#region Imports
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { DataService } from '@campcadet/services/data.service';
import { ContactService } from '@campcadet/services/contact.service';
import { Email } from '@campcadet/model/email';
import { FormErrorState } from '@campcadet/model/form-error-state';
//#endregion

@Component({
  selector: 'cc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //#region Fields
  //#region Form Controls
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  });
  //#endregion
  matcher = new FormErrorState();

  private sendToDirectors = false;
  //#endregion

  constructor(
    private contactService: ContactService,
    public dataService: DataService,
    public dialogRef: MatDialogRef<ContactComponent>) {

  }

  sendEmail(): void {
    // 'relay-hosting.secureserver.net', // 'smtp.gmail.com',
    const email: Email = {
      server: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailservergodaddy').value,
      smtpPort: +this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailsmtpport').value,
      useSsl: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailusessl').value === 'true' ?
        true : false,
      priority: +this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailpriority').value,
      subject: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'contactformsubject').value,
      sender: {
        displayName: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailfromname').value,
        emailAddress: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailfrom').value
      },
      recipients: { to: [] },
      content: {
        html: `<html><head><style>${this.getStyle()}</style></head><body>${this.getFormData()}</body></html>`
      }
    };

    const forcedRecipients = this.dataService.configSettings.find(d => d.description.toLowerCase() === 'contactformrecipients')
      .value.split(';');

    // Send email to all board directors?
    if (this.sendToDirectors) {
      this.dataService.boardDirectors
        .filter(director => director.email)
        .map(director => director.email)
        .forEach(address => email.recipients.to.push(address));
    }

    // Send email to any forced email addresses
    if (forcedRecipients && forcedRecipients.length) {
      forcedRecipients.forEach(address => {
        if (email.recipients.to.indexOf(address) === -1) {
          email.recipients.to.push(address);
        }
      });
    }

    this.contactService.sendEmail(email)
      .subscribe(() => this.dialogRef.close(true),
        err => {
          console.log(err);
          this.dialogRef.close(false);
        });
  }

  private getStyle(): string {
    return `.p { margin-bottom: 20px; }
      .bold { font-weight: bold; }
    `;
  }

  private getFormData(): string {
    const type = this.dataService.contactTypes.find(t => t.id === this.contactForm.controls['type'].value);
    const reason = this.dataService.contactReasons.find(r => r.id === this.contactForm.controls['reason'].value);
    const phone = this.contactForm.controls['phone'].value ?
      `<div class="p"><div class="bold">Phone:</div><div>${this.contactForm.controls['phone'].value}</div></div>` :
      '';

    return `
      <div class="p"><div class="bold">Sender:</div><div>${this.contactForm.controls['name'].value}</div></div>
      <div class="p"><div class="bold">Email:</div><div>${this.contactForm.controls['email'].value}</div></div>
      ${phone}
      <div class="p"><div class="bold">Contact Type:</div><div>${type.description}</div></div>
      <div class="p"><div class="bold">Contact Reason:</div><div>${reason.description}</div></div>
      <div class="p"><div class="bold">Comment/Question:</div><div>${this.contactForm.controls['comments'].value
        .replace(new RegExp('\n', 'g'), '<br />')}</div></div>
    `;
  }
}
