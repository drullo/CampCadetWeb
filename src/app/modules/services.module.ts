//#region Imports
import { NgModule } from '@angular/core';
import { ApplicationsService } from '@campcadet/services/applications.service';
import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbsService } from '@campcadet/services/blurbs.service';
import { BoardService } from '@campcadet/services/board.service';
import { DateService } from '@campcadet/services/date.service';
import { DonorsService } from '@campcadet/services/donors.service';
import { FaqService } from '@campcadet/services/faq.service';
import { LinksService } from '@campcadet/services/links.service';
import { RequirementsService } from '@campcadet/services/requirements.service';
import { RequiredItemsService } from '@campcadet/services/required-items.service';
import { RulesService } from '@campcadet/services/rules.service';
import { CarouselService } from '@campcadet/services/carousel.service';
import { ContactService } from '@campcadet/services/contact.service';
import { ConfigService } from '@campcadet/services/config.service';

import { DataService } from '@campcadet/services/data.service';
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
