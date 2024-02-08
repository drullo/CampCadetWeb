import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BlurbPipe } from '../pipes/blurb.pipe';
import { DonorCatLinksInLevelPipe } from '../pipes/donor-cat-links-in-level.pipe';
import { FaqForCategoryPipe } from '../pipes/faq-for-category.pipe';
import { LinkForCategoryPipe } from '../pipes/link-for-category.pipe';
import { MemberForCategoryPipe } from '../pipes/member-for-category.pipe';
import { RandomizePipe } from '../pipes/randomize.pipe';

import { BoardComponent } from '../components/board/board.component';
import { CallOfHonorComponent } from '../components/call-of-honor/call-of-honor.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ContactComponent } from '../components/contact/contact.component';
import { DataWaiterComponent } from '../components/data-waiter/data-waiter.component';
import { DonateComponent } from '../components/donate/donate.component';
import { DonorsComponent } from '../components/donors/donors.component';
import { EligibilityComponent } from '../components/eligibility/eligibility.component';
import { EmailTestComponent } from '../components/email-test/email-test.component';
import { EnrollmentComponent } from '../components/enrollment/enrollment.component';
import { FAQComponent } from '../components/faq/faq.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HistoryComponent } from '../components/history/history.component';
import { HomeComponent } from '../components/home/home.component';
import { LinksComponent } from '../components/links/links.component';
import { LoginSelectorComponent } from '../components/login-selector/login-selector.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PreparationComponent } from '../components/preparation/preparation.component';
import { PrintComponent } from '../components/print/print.component';
import { PromoVideoComponent } from '../components/promo-video/promo-video.component';
import { RequiredItemsComponent } from '../components/required-items/required-items.component';
import { RulesComponent } from '../components/rules/rules.component';
import { WhatIsCampCadetComponent } from '../components/what-is-camp-cadet/what-is-camp-cadet.component';

@NgModule({
  declarations: [
    AppComponent,
    BlurbPipe,
    DonorCatLinksInLevelPipe,
    FaqForCategoryPipe,
    LinkForCategoryPipe,
    MemberForCategoryPipe,
    RandomizePipe,
    BoardComponent,
    CallOfHonorComponent,
    CarouselComponent,
    ContactComponent,
    DataWaiterComponent,
    DonateComponent,
    DonorsComponent,
    EligibilityComponent,
    EmailTestComponent,
    EnrollmentComponent,
    FAQComponent,
    FooterComponent,
    HistoryComponent,
    HomeComponent,
    LinksComponent,
    LoginSelectorComponent,
    MenuComponent,
    PreparationComponent,
    PrintComponent,
    PromoVideoComponent,
    RequiredItemsComponent,
    RulesComponent,
    WhatIsCampCadetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
  }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
