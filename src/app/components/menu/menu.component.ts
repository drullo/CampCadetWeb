import { CampDatesComponent } from '@campcadet/components/admin/camp-dates/camp-dates.component';
import { AuthenticationService } from '@campcadet/services/authentication.service';
//#region Imports
import { Component, OnInit, ViewContainerRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastsManager } from 'ng2-toastr';
import * as moment from 'moment';
import { environment } from '@environment/environment';

import { ApplicationsService } from '@campcadet/services/applications.service';
import { DataService } from '@campcadet/services/data.service';

import { BoardComponent } from '@campcadet/components/board/board.component';
import { CallOfHonorComponent } from '@campcadet/components/call-of-honor/call-of-honor.component';
import { ContactComponent } from '@campcadet/components/contact/contact.component';
import { DonateComponent } from '@campcadet/components/donate/donate.component';
import { DonorsComponent } from '@campcadet/components/donors/donors.component';
import { EnrollmentComponent } from '@campcadet/components/enrollment/enrollment.component';
import { FAQComponent } from '@campcadet/components/faq/faq.component';
import { HistoryComponent } from '@campcadet/components/history/history.component';
import { HomeComponent } from '@campcadet/components/home/home.component';
import { LinksComponent } from '@campcadet/components/links/links.component';
import { PreparationComponent } from '@campcadet/components/preparation/preparation.component';
import { RequiredItemsComponent } from '@campcadet/components/required-items/required-items.component';
import { RulesComponent } from '@campcadet/components/rules/rules.component';

import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { LoginSelectorComponent } from '@campcadet/components/login-selector/login-selector.component';
//#endregion

@Component({
  selector: 'cc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewChecked {
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

  user: {
    id: string,
    name: string,
    email: string,
    image: string
  };
  //#endregion

  //#region Lifecycle
  constructor(private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationsService,
    private dialog: MatDialog,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public dataService: DataService,
    private socialAuthService: AuthService,
    private authenticationService: AuthenticationService) {
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

  ngAfterViewChecked(): void {
    if (this.user || !this.dataService.configSettings) { return; }

    // Logged in?
    const fbUser = JSON.parse(localStorage.getItem('facebook'));
    const googleUser = JSON.parse(localStorage.getItem('google'));

    if (fbUser && this.userIsAdmin(fbUser.email)) {
      this.user = {
        id: fbUser.id,
        name: fbUser.name,
        email: fbUser.email,
        image: fbUser.image
      };
    } else if (googleUser && this.userIsAdmin(googleUser.email)) {
      this.user = {
        id: googleUser.id,
        name: googleUser.name,
        email: googleUser.email,
        image: googleUser.image
      };
    }
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

  login(): void {
    this.dialog.open(LoginSelectorComponent).afterClosed().subscribe(socialPlatform => {
      if (!socialPlatform) { return; }

      let socialPlatformProvider;

      if (socialPlatform === 'facebook') {
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      } else if (socialPlatform === 'google') {
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService
        .signIn(socialPlatformProvider)
        .then((userData) => {
          if (this.userIsAdmin(userData.email)) {
            this.user = {
              id: userData.id,
              name: userData.name,
              image: userData.image,
              email: userData.email
            };

            // Make sure we only save one set of credentials at a time
            localStorage.removeItem('facebook');
            localStorage.removeItem('google');

            localStorage.setItem(socialPlatform, JSON.stringify(userData));
            this.toastr.success('Successfully logged in');
          } else {
            this.toastr.error('Sorry, you are not an approved administrator', 'Login Denied');
          }
        }
        )
        .catch(() => this.toastr.error('Login failed'));
    });
  }

  logout(): void {
    localStorage.removeItem('facebook');
    localStorage.removeItem('google');
    this.user = null;
    this.authenticationService.loggedIn = false;
    this.toastr.success('Logged out');
  }

  userIsAdmin(userEmail: string): boolean {
    if (!this.dataService.configSettings || !userEmail) { return false; }

    const admins = this.dataService.configSettings
      .filter(setting => setting.description.toLowerCase() === 'adminemailaddresses')[0];

    if (!admins) { return false; }

    const split = admins.value.split(';');
    const match = split.filter(admin => admin.toLowerCase() === userEmail.toLowerCase())[0];

    const validUser = match !== undefined && match !== null;
    this.authenticationService.loggedIn = validUser;
    return validUser;
  }

  edit(topic: string): void {
    switch (topic) {
      case 'campDates':
        this.dialog.open(CampDatesComponent);
        break;
    }
  }
}
