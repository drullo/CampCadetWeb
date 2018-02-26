import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ContactComponent } from './../contact/contact.component';
import { ToastsManager } from 'ng2-toastr';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor(private dialog: MatDialog,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public dataService: DataService) {

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.year = moment().year();
  }

  contact(): void {
    this.dialog.open(ContactComponent)
      .afterClosed()
      .subscribe(result => {
        if (result === undefined) { return; }

        if (result) {
          this.toastr.success('Email successfully sent', 'Message Received');
        } else {
          this.toastr.error('Failed to send email', 'Give Us A Call');
        }
      }, err => this.toastr.error('Unable to display contact form', 'Give Us A Call'));
  }
}
