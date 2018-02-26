import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorCatLinksInLevelPipe } from './../pipes/donor-cat-links-in-level.pipe';
import { FaqForCategoryPipe } from './../pipes/faq-for-category.pipe';
import { MemberForCategoryPipe } from './../pipes/member-for-category.pipe';
import { LinkForCategoryPipe } from './../pipes/link-for-category.pipe';
import { RandomizePipe } from './../pipes/randomize.pipe';

import { BlurbPipe } from './../pipes/blurb.pipe';
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
