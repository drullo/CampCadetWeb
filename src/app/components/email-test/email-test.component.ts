import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Email } from '../../model/email';

@Component({
  selector: 'cc-email-test',
  templateUrl: './email-test.component.html',
  styleUrls: ['./email-test.component.css']
})
export class EmailTestComponent {
  server = 'relay-hosting.secureserver.net'; // smtp.gmail.com';
  port = 25;
  ssl = false; // true;
  subject = 'Test email';
  sender = {
    displayName: 'Camp Cadet Website',
    emailAddress: 'WestmorelandCampCadet@gmail.com',
    userName: '', // 'WestmorelandCampCadet@gmail.com',
    password: '' // 'campcadet1'
  };
  recipients = 'drullo@cleavelandprice.com';
  content = 'testing...';

  result: string | undefined;

  constructor(private contactService: ContactService) { }

  sendEmail(): void {
    const email: Email = {
      server: this.server,
      smtpPort: this.port,
      useSsl: this.ssl,
      priority: 0,
      subject: this.subject,
      sender: this.sender,
      recipients: {
        to: this.recipients.split(';')
      },
      content: {
        html: `<html><body>${this.content}</body></html>`
      }
    };

    this.result = undefined;

    this.contactService.sendEmail(email)
      .subscribe({
        complete: () => {
          console.log('email sent');
          this.result = 'good';
        },
        error: (err) => {
          console.log(err);
          this.result = 'bad';
        }
      });
  }
}