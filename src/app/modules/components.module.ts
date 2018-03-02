//#region Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@campcadet/modules/material.module';
import { PipesModule } from '@campcadet/modules/pipes.module';

import { BoardComponent } from '@campcadet/components/board/board.component';
import { CallOfHonorComponent } from '@campcadet/components/call-of-honor/call-of-honor.component';
import { CarouselComponent } from '@campcadet/components/carousel/carousel.component';
import { ContactComponent } from '@campcadet/components/contact/contact.component';
import { DataWaiterComponent } from '@campcadet/components/data-waiter/data-waiter.component';
import { DonateComponent } from '@campcadet/components/donate/donate.component';
import { DonorsComponent } from '@campcadet/components/donors/donors.component';
import { EmailTestComponent } from '@campcadet/components/email-test/email-test.component';
import { EnrollmentComponent } from '@campcadet/components/enrollment/enrollment.component';
import { EligibilityComponent } from '@campcadet/components/eligibility/eligibility.component';
import { FAQComponent } from '@campcadet/components/faq/faq.component';
import { FooterComponent } from '@campcadet/components/footer/footer.component';
import { HistoryComponent } from '@campcadet/components/history/history.component';
import { HomeComponent } from '@campcadet/components/home/home.component';
import { LinksComponent } from '@campcadet/components/links/links.component';
import { LoginSelectorComponent } from '@campcadet/components/login-selector/login-selector.component';
import { MenuComponent } from '@campcadet/components/menu/menu.component';
import { PreparationComponent } from '@campcadet/components/preparation/preparation.component';
import { PrintComponent } from '@campcadet/components/print/print.component';
import { PromoVideoComponent } from '@campcadet/components/promo-video/promo-video.component';
import { RequiredItemsComponent } from '@campcadet/components/required-items/required-items.component';
import { RulesComponent } from '@campcadet/components/rules/rules.component';
import { WhatIsCampCadetComponent } from '@campcadet/components/what-is-camp-cadet/what-is-camp-cadet.component';

// Admin
import { BlurbComponent as AdminBlurbComponent } from '@campcadet/components/admin/blurb/blurb.component';
import { BoardComponent as AdminBoardComponent } from '@campcadet/components/admin/board/board.component';
import { CampDatesComponent as AdminCampDatesComponent } from '@campcadet/components/admin/camp-dates/camp-dates.component';
import { DonorsComponent as AdminDonorsComponent } from '@campcadet/components/admin/donors/donors.component';
import { ItemsComponent as AdminItemsComponent } from '@campcadet/components/admin/items/items.component';
import { LinksComponent as AdminLinksComponent } from '@campcadet/components/admin/links/links.component';
import { QuestionsComponent as AdminQuestionsComponent } from '@campcadet/components/admin/questions/questions.component';
import { RulesComponent as AdminRulesComponent } from '@campcadet/components/admin/rules/rules.component';
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
        WhatIsCampCadetComponent,

        // Admin components
        AdminBlurbComponent,
        AdminBoardComponent,
        AdminCampDatesComponent,
        AdminDonorsComponent,
        AdminItemsComponent,
        AdminLinksComponent,
        AdminQuestionsComponent,
        AdminRulesComponent
    ],
    exports: [
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
        WhatIsCampCadetComponent,

        // Admin components
        AdminBlurbComponent,
        AdminBoardComponent,
        AdminCampDatesComponent,
        AdminDonorsComponent,
        AdminItemsComponent,
        AdminLinksComponent,
        AdminQuestionsComponent,
        AdminRulesComponent
    ],
    entryComponents: [
        ContactComponent,
        LoginSelectorComponent,

        // Admin components
        AdminBlurbComponent,
        AdminBoardComponent,
        AdminCampDatesComponent,
        AdminDonorsComponent,
        AdminItemsComponent,
        AdminLinksComponent,
        AdminQuestionsComponent,
        AdminRulesComponent
    ]
})
export class ComponentsModule { }
