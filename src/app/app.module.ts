import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RequestComponent} from './demo/request/request';
import {Req} from './common/req';
@NgModule({
  declarations: [
    AppComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Req],
  bootstrap: [AppComponent]
})
export class AppModule {
}
