//#region Imports
import { NgModule } from '@angular/core';
import { ApplicationsService } from './../services/applications.service';
import { AuthenticationService } from './../services/authentication.service';
import { BlurbsService } from './../services/blurbs.service';
import { BoardService } from './../services/board.service';
import { DateService } from './../services/date.service';
import { DonorsService } from './../services/donors.service';
import { FaqService } from './../services/faq.service';
import { LinksService } from './../services/links.service';
import { RequirementsService } from './../services/requirements.service';
import { RequiredItemsService } from './../services/required-items.service';
import { RulesService } from './../services/rules.service';
import { CarouselService } from './../services/carousel.service';
import { ContactService } from './../services/contact.service';
import { ConfigService } from './../services/config.service';

import { DataService } from './../services/data.service';
//#endregion

@NgModule({
    providers: [
        ApplicationsService,
        AuthenticationService,
        BlurbsService,
        BoardService,
        ConfigService,
        ContactService,
        DateService,
        DonorsService,
        FaqService,
        LinksService,
        RequirementsService,
        RequiredItemsService,
        RulesService,
        CarouselService,

        DataService
    ]
})
export class ServicesModule { }
