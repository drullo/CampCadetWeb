import { AfterViewChecked, Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { DateTime } from 'luxon';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ApplicationsService } from '../../services/applications.service';
import { DataService } from '../../services/data.service';

import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { ContactComponent } from '../../components/contact/contact.component';
/*import { BoardComponent } from '../../components/board/board.component';
import { CallOfHonorComponent } from '../../components/call-of-honor/call-of-honor.component';
import { DonateComponent } from '../../components/donate/donate.component';
import { DonorsComponent } from '../../components/donors/donors.component';
import { EnrollmentComponent } from '../../components/enrollment/enrollment.component';
import { FAQComponent } from '../../components/faq/faq.component';
import { HistoryComponent } from '../../components/history/history.component';
import { HomeComponent } from '../../components/home/home.component';
import { LinksComponent } from '../../components/links/links.component';
import { PreparationComponent } from '../../components/preparation/preparation.component';
import { RequiredItemsComponent } from '../../components/required-items/required-items.component';
import { RulesComponent } from '../../components/rules/rules.component';*/
import { config } from '../../config';

@Component({
    selector: 'cc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    imports: [MatToolbar, MatToolbarRow, MatIconButton, MatMenuTrigger, MatIcon, MatMenu, MatMenuItem, RouterLink, MatButton, ToastrModule]
})
export class MenuComponent implements OnInit, AfterViewChecked {
  //private route = inject(ActivatedRoute);
  private applicationService = inject(ApplicationsService);
  private dialog = inject(MatDialog);
  private toastr = inject(ToastrService);
  dataService = inject(DataService);

  atBoard = false;
  atCOH = false;
  atDonate = false;
  atDonors = false;
  atEnrollment = false;
  atFaq = false;
  atHistory = false;
  atHome = false;
  atLinks = false;
  atPrep = false;
  atRequirements = false;
  atRules = false;

  application?: string;
  applicationYear?: string;

  user?: {
    id: string,
    name: string,
    email: string,
    image: string
  };

  ngOnInit() {
    /*this.atBoard = this.route.component === BoardComponent;
    this.atCOH = this.route.component === CallOfHonorComponent;
    this.atDonate = this.route.component === DonateComponent;
    this.atDonors = this.route.component === DonorsComponent;
    this.atEnrollment = this.route.component === EnrollmentComponent;
    this.atFaq = this.route.component === FAQComponent;
    this.atHistory = this.route.component === HistoryComponent;
    this.atHome = this.route.component === HomeComponent;
    this.atLinks = this.route.component === LinksComponent;
    this.atPrep = this.route.component === PreparationComponent;
    this.atRequirements = this.route.component === RequiredItemsComponent;
    this.atRules = this.route.component === RulesComponent;*/

    this.atBoard = location.pathname.includes("/board");
    this.atCOH = location.pathname.includes("/coh");
    this.atDonate = location.pathname.includes("/donate");
    this.atDonors = location.pathname.includes("/donors");
    this.atEnrollment = location.pathname.includes("/enrollment");
    this.atFaq = location.pathname.includes("/faq");
    this.atHistory = location.pathname.includes("/history");
    this.atHome = location.pathname.includes("/home");
    this.atLinks = location.pathname.includes("/links");
    this.atPrep = location.pathname.includes("/prep");
    this.atRequirements = location.pathname.includes("/requirements");
    this.atRules = location.pathname.includes("/rules");

    // Get the current camp application
    this.applicationService.getLatest()
      .subscribe(app => {
        const year = app.replace('applications/', '').split('.')[0];

        if (+year < DateTime.now().year) { return; }

        this.application = `${config.api}/${app}`;
        this.applicationYear = year;
      });
  }

  ngAfterViewChecked(): void {
    if (this.user || !this.dataService.configSettings) { return; }
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
          this.toastr.error('Unable to display contact form', 'Give Us A Call')
        }
      });
  }
}