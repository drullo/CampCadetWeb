//#region Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { PipesModule } from './pipes.module';

import { BoardComponent } from './../components/board/board.component';
import { BlurbComponent } from './../components/admin/blurb/blurb.component';
import { CallOfHonorComponent } from './../components/call-of-honor/call-of-honor.component';
import { CampDatesComponent } from './../components/admin/camp-dates/camp-dates.component';
import { CarouselComponent } from './../components/carousel/carousel.component';
import { ContactComponent } from './../components/contact/contact.component';
import { DataWaiterComponent } from './../components/data-waiter/data-waiter.component';
import { DonateComponent } from './../components/donate/donate.component';
import { DonorsComponent } from './../components/donors/donors.component';
import { EmailTestComponent } from './../components/email-test/email-test.component';
import { EnrollmentComponent } from './../components/enrollment/enrollment.component';
import { EligibilityComponent } from './../components/eligibility/eligibility.component';
import { FAQComponent } from './../components/faq/faq.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HistoryComponent } from './../components/history/history.component';
import { HomeComponent } from './../components/home/home.component';
import { LinksComponent } from './../components/links/links.component';
import { LoginSelectorComponent } from './../components/login-selector/login-selector.component';
import { MenuComponent } from './../components/menu/menu.component';
import { PreparationComponent } from './../components/preparation/preparation.component';
import { PrintComponent } from './../components/print/print.component';
import { PromoVideoComponent } from './../components/promo-video/promo-video.component';
import { RequiredItemsComponent } from './../components/required-items/required-items.component';
import { RulesComponent } from './../components/rules/rules.component';
import { WhatIsCampCadetComponent } from './../components/what-is-camp-cadet/what-is-camp-cadet.component';
//#endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        PipesModule
    ],
    declarations: [
        BlurbComponent,
        BoardComponent,
        CallOfHonorComponent,
        CampDatesComponent,
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
    exports: [
        BlurbComponent,
        BoardComponent,
        CallOfHonorComponent,
        CampDatesComponent,
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
    entryComponents: [
        ContactComponent,
        LoginSelectorComponent,

        // Admin components
        BlurbComponent,
        CampDatesComponent
    ]
})
export class ComponentsModule { }
