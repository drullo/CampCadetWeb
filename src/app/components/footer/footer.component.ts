import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { DateTime } from 'luxon';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ContactComponent } from '../../components/contact/contact.component';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'cc-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    imports: [RouterLink, ToastrModule]
})
export class FooterComponent implements OnInit {
  private dialog = inject(MatDialog);
  private toastr = inject(ToastrService);
  dataService = inject(DataService);

  year?: number;

  ngOnInit() {
    this.year = DateTime.now().year;
  }

  contact(): void {
    this.dialog.open(ContactComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result === undefined) { return; }

          if (result) {
            this.toastr.success('Email successfully sent', 'Message Received');
          } else {
            this.toastr.error('Failed to send email', 'Give Us A Call');
          }
        },
        error: (err) => {
          this.toastr.error('Unable to display contact form', 'Give Us A Call');
          console.log(err);
        }
      })
  }
}