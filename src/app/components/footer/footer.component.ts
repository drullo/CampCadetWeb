//#region Imports
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DateTime } from 'luxon';
import { ContactComponent } from '../../components/contact/contact.component';
import { DataService } from '../../services/data.service';
//#endregion

@Component({
  selector: 'cc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number | undefined;

  constructor(private dialog: MatDialog,
    private toastr: ToastrService,
    public dataService: DataService) {
  }

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