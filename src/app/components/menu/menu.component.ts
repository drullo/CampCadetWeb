//#region Imports
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
//import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { DateTime } from 'luxon';

import { Email } from './../../model/email';

// Services
import { ApplicationsService } from '../../services/applications.service';
//import { AuthenticationService } from '../../services/authentication.service';
import { DataService } from '../../services/data.service';
import { ContactService } from '../../services/contact.service';

// Components
import { BoardComponent } from '../../components/board/board.component';
import { CallOfHonorComponent } from '../../components/call-of-honor/call-of-honor.component';
//import { CampDatesComponent } from '../../components/admin/camp-dates/camp-dates.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { DonateComponent } from '../../components/donate/donate.component';
import { DonorsComponent } from '../../components/donors/donors.component';
import { EnrollmentComponent } from '../../components/enrollment/enrollment.component';
import { FAQComponent } from '../../components/faq/faq.component';
import { HistoryComponent } from '../../components/history/history.component';
import { HomeComponent } from '../../components/home/home.component';
import { LinksComponent } from '../../components/links/links.component';
import { LoginSelectorComponent } from '../../components/login-selector/login-selector.component';
import { PreparationComponent } from '../../components/preparation/preparation.component';
import { RequiredItemsComponent } from '../../components/required-items/required-items.component';
import { RulesComponent } from '../../components/rules/rules.component';
import { config } from '../../config';
//#endregion

@Component({
  selector: 'cc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewChecked {
  //#region Fields
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

  application: string | undefined;
  applicationYear: string | undefined;

  user: {
    id: string,
    name: string,
    email: string,
    image: string
  } | undefined;
  //#endregion

  //#region Lifecycle
  constructor(private route: ActivatedRoute,
    private applicationService: ApplicationsService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    public dataService: DataService,
    //private socialAuthService: AuthService,
    private contactService: ContactService,
    //private authenticationService: AuthenticationService
    ) {
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

        if (+year < DateTime.now().year) { return; }

        this.application = `${config.api}/${app}`;
        this.applicationYear = year;
      });
  }

  ngAfterViewChecked(): void {
    if (this.user || !this.dataService.configSettings) { return; }

    // Logged in?
    /*const fbUser = localStorage.getItem('facebook') ?
      JSON.parse(localStorage.getItem('facebook')!) :
      null;

    const googleUser = localStorage.getItem('google') ?
      JSON.parse(localStorage.getItem('google')!) :
      null;

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
    }*/
  }
  //#endregion

  //#region Utilities
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

  /*login(): void {
    this.dialog.open(LoginSelectorComponent).afterClosed().subscribe(socialPlatform => {
      if (!socialPlatform) { return; }

      let socialPlatformProvider;

      if (socialPlatform === 'facebook') {
        //socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      } else if (socialPlatform === 'google') {
        //socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
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

            const email: Email = {
              server: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailservergodaddy').value,
              smtpPort: +this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailsmtpport').value,
              useSsl: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailusessl').value === 'true' ?
                true : false,
              priority: +this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailpriority').value,
              subject: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'unauthorizedloginsubject').value,
              sender: {
                displayName: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailfromname').value,
                emailAddress: this.dataService.configSettings.find(d => d.description.toLowerCase() === 'emailfrom').value
              },
              recipients: { to: [] },
              content: {
                html: `<html><body>
                  <div>platform: ${socialPlatform}</div>
                  <div>id: ${userData.id}</div>
                  <div>name: ${userData.name}</div>
                  <div>image: ${userData.image}</div>
                  <div>email: ${userData.email}</div>
                </body></html>`
              }
            };

            // Send email to any forced email addresses
            const forcedRecipients = this.dataService.configSettings.find(d => d.description.toLowerCase() === 'contactformrecipients')
              .value.split(';');

            if (forcedRecipients && forcedRecipients.length) {
              forcedRecipients.forEach(address => {
                if (email.recipients.to.indexOf(address) === -1) {
                  email.recipients.to.push(address);
                }
              });
            }

            this.contactService.sendEmail(email).subscribe();
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

  private userIsAdmin(userEmail: string): boolean {
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
  }*/
  //#endregion
}