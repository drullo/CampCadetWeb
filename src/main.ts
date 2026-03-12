/*import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/modules/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/components/app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, ToastrModule.forRoot({
            positionClass: 'toast-top-center'
        })),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
*/
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
