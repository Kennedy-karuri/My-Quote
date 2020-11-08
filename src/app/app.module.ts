import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiseSayingComponent } from './wise-saying/wise-saying.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsComponent } from './forms/forms.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    WiseSayingComponent,
    QuoteComponent,
    FormsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
