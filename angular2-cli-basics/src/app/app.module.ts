import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import {EmailService} from './email.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  {provide: 'email', useClass: EmailService},
  {provide: 'name', useValue: 'Madhuri'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
