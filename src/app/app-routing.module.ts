//#region Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from '@campcadet/components/board/board.component';
import { CallOfHonorComponent } from '@campcadet/components/call-of-honor/call-of-honor.component';
import { DonateComponent } from '@campcadet/components/donate/donate.component';
import { DonorsComponent } from '@campcadet/components/donors/donors.component';
import { EmailTestComponent } from '@campcadet/components/email-test/email-test.component';
import { EnrollmentComponent } from '@campcadet/components/enrollment/enrollment.component';
import { FAQComponent } from '@campcadet/components/faq/faq.component';
import { HistoryComponent } from '@campcadet/components/history/history.component';
import { HomeComponent } from '@campcadet/components/home/home.component';
import { LinksComponent } from '@campcadet/components/links/links.component';
import { PreparationComponent } from '@campcadet/components/preparation/preparation.component';
import { PrintComponent } from '@campcadet/components/print/print.component';
import { RequiredItemsComponent } from '@campcadet/components/required-items/required-items.component';
import { RulesComponent } from '@campcadet/components/rules/rules.component';
//#endregion

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
  { path: 'coh', component: CallOfHonorComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'donors', component: DonorsComponent },
  { path: 'emailtest', component: EmailTestComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'links', component: LinksComponent },
  { path: 'prep', component: PreparationComponent },
  { path: 'print/:topic', component: PrintComponent },
  { path: 'requirements', component: RequiredItemsComponent },
  { path: 'rules', component: RulesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
