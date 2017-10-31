import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {RequestComponent} from './demo/request/request';
import {BdMapComponent} from './demo/map/map';
import {RequestResultComponent} from './demo/request.result/request.result';
import {Req} from './common/req';
import {AppRoutingModule} from './app-routeing.module';


@NgModule({
  // 组件
  declarations: [
    AppComponent,
    RequestComponent,
    ErrorComponent,
    RequestResultComponent,
    BdMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  // 服务
  providers: [Req],
  bootstrap: [AppComponent],

})

export class AppModule {
}
