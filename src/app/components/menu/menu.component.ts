//#region Imports
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastsManager } from 'ng2-toastr';
import * as moment from 'moment';
import { environment } from './../../../environments/environment';

import { ApplicationsService } from './../../services/applications.service';
import { DataService } from './../../services/data.service';

import { BoardComponent } from './../board/board.component';
import { CallOfHonorComponent } from './../call-of-honor/call-of-honor.component';
import { ContactComponent } from './../contact/contact.component';
import { DonateComponent } from './../donate/donate.component';
import { DonorsComponent } from './../donors/donors.component';
import { EnrollmentComponent } from './../enrollment/enrollment.component';
import { FAQComponent } from './../faq/faq.component';
import { HistoryComponent } from './../history/history.component';
import { HomeComponent } from './../home/home.component';
import { LinksComponent } from './../links/links.component';
import { PreparationComponent } from './../preparation/preparation.component';
import { RequiredItemsComponent } from './../required-items/required-items.component';
import { RulesComponent } from '../rules/rules.component';
//#endregion

@Component({
  selector: 'cc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //#region Fields
  atBoard: boolean;
  atCOH: boolean;
  atDonate: boolean;
  atDonors: boolean;
  atEnrollment: boolean;
  atFaq: boolean;
  atHistory: boolean;
  atHome: boolean;
  atLinks: boolean;
  atPrep: boolean;
  atRequirements: boolean;
  atRules: boolean;

  application: string;
  applicationYear: string;
  //#endregion

  //#region Lifecycle
  constructor(private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationsService,
    private dialog: MatDialog,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public dataService: DataService) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.atBoard = this.route.component === BoardComponent;
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
    this.atRules = this.route.component === RulesComponent;

    // Get the current camp application
    this.applicationService.getLatest()
      .subscribe(app => {
        const year = app.replace('applications/', '').split('.')[0];

        if (+year < moment().year()) { return; }

        this.application = `${environment.apiUrl}/${app}`;
        this.applicationYear = year;
      });
  }
  //#endregion

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
