import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MyFilterPipe} from './app.filter';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
