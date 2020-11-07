import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiseSayingComponent } from './wise-saying/wise-saying.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    WiseSayingComponent,
    QuoteComponent,
    FormsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
