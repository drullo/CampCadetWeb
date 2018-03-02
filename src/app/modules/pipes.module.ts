//#region Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlurbPipe } from '@campcadet/pipes/blurb.pipe';
import { DonorCatLinksInLevelPipe } from '@campcadet/pipes/donor-cat-links-in-level.pipe';
import { FaqForCategoryPipe } from '@campcadet/pipes/faq-for-category.pipe';
import { MemberForCategoryPipe } from '@campcadet/pipes/member-for-category.pipe';
import { LinkForCategoryPipe } from '@campcadet/pipes/link-for-category.pipe';
import { RandomizePipe } from '@campcadet/pipes/randomize.pipe';
//#endregion

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DonorCatLinksInLevelPipe,
        FaqForCategoryPipe,
        MemberForCategoryPipe,
        LinkForCategoryPipe,
        RandomizePipe,

        BlurbPipe
    ],
    exports: [
        DonorCatLinksInLevelPipe,
        FaqForCategoryPipe,
        MemberForCategoryPipe,
        LinkForCategoryPipe,
        RandomizePipe,

        BlurbPipe
    ]
})
export class PipesModule { }
