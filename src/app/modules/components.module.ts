//#region Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { PipesModule } from './pipes.module';

import { BoardComponent } from './../components/board/board.component';
import { CallOfHonorComponent } from './../components/call-of-honor/call-of-honor.component';
import { CarouselComponent } from './../components/carousel/carousel.component';
import { ContactComponent } from './../components/contact/contact.component';
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
import { MenuComponent } from './../components/menu/menu.component';
import { PreparationComponent } from './../components/preparation/preparation.component';
import { RequiredItemsComponent } from './../components/required-items/required-items.component';
import { RulesComponent } from './../components/rules/rules.component';
import { WhatIsCampCadetComponent } from './../components/what-is-camp-cadet/what-is-camp-cadet.component';

import { DataWaiterComponent } from './../components/data-waiter/data-waiter.component';
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
        MenuComponent,
        PreparationComponent,
        RequiredItemsComponent,
        RulesComponent,
        WhatIsCampCadetComponent,

        DataWaiterComponent
    ],
    exports: [
        BoardComponent,
        CallOfHonorComponent,
        CarouselComponent,
        ContactComponent,
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
        MenuComponent,
        PreparationComponent,
        RequiredItemsComponent,
        RulesComponent,
        WhatIsCampCadetComponent,

        DataWaiterComponent
    ],
    entryComponents: [
      ContactComponent
    ]
})
export class ComponentsModule { }
