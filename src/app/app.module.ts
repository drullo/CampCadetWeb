//#region Imports
// Angular
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Ng2-Toastr
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomToastOptions } from '@campcadet/model/custom-toast-options';

// Social login
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, } from 'angular5-social-login';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from '@campcadet/modules/services.module';
import { ComponentsModule } from '@campcadet/modules/components.module';
//#endregion

// Social login configs
export function getAuthServiceConfigs() {
  return new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('194960461275730')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('934766197685-mpuahjrbct5fur2hgqf18h4rhr1lcc76.apps.googleusercontent.com')
      }
    ]
  );
}

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
    SocialLoginModule,

    RouterModule.forRoot(routes),

    ServicesModule,
    ComponentsModule
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomToastOptions },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
