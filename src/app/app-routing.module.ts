//#region Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './components/board/board.component';
import { CallOfHonorComponent } from './components/call-of-honor/call-of-honor.component';
import { DonateComponent } from './components/donate/donate.component';
import { DonorsComponent } from './components/donors/donors.component';
import { EmailTestComponent } from './components/email-test/email-test.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { FAQComponent } from './components/faq/faq.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { RequiredItemsComponent } from './components/required-items/required-items.component';
import { RulesComponent } from './components/rules/rules.component';
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
  { path: 'requirements', component: RequiredItemsComponent },
  { path: 'rules', component: RulesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
