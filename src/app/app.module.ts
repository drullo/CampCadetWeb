// Angular
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Ng2-Toastr
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomToastOptions } from './model/custom-toast-options';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './modules/services.module';
import { ComponentsModule } from './modules/components.module';

const routes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ToastModule.forRoot(),

    RouterModule.forRoot(routes),

    ServicesModule,
    ComponentsModule
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomToastOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
