import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OutputTestComponent } from './output-test/output-test.component';
import { EmailService } from './email.service';

@NgModule({
  declarations: [
    AppComponent,
    OutputTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide:'email', useClass:EmailService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
