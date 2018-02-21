// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Ng2-Toastr
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomToastOptions } from './model/custom-toast-options';

// Services
import { BlurbsService } from './services/blurbs.service';
import { RequirementsService } from './services/requirements.service';
import { RequiredItemsService } from './services/required-items.service';
import { RulesService } from './services/rules.service';
import { CarouselService } from './services/carousel.service';

// App Components
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhatIsCampCadetComponent } from './components/what-is-camp-cadet/what-is-camp-cadet.component';
import { EligibilityComponent } from './components/eligibility/eligibility.component';
import { FAQComponent } from './components/faq/faq.component';
import { RequiredItemsComponent } from './components/required-items/required-items.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { RulesComponent } from './components/rules/rules.component';
import { CallOfHonorComponent } from './components/call-of-honor/call-of-honor.component';

const routes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WhatIsCampCadetComponent,
    EligibilityComponent,
    FAQComponent,
    RequiredItemsComponent,
    PreparationComponent,
    RulesComponent,
    CallOfHonorComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    ToastModule.forRoot(),

    RouterModule.forRoot(routes)
  ],
  providers: [
    BlurbsService,
    RequirementsService,
    RequiredItemsService,
    RulesService,
    CarouselService,
    { provide: ToastOptions, useClass: CustomToastOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
