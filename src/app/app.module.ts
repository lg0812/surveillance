import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ResetComponent} from './user/reset/reset.component';
import {UserComponent} from './user/user.component';
import {SuperviseComponent} from './supervise/supervise.component';
import {RequestComponent} from './demo/request/request';
import {BdMapComponent} from './demo/map/map';
import {LoginReducerComponent} from './demo/reducer/reducer.component';
import {RequestResultComponent} from './demo/request.result/request.result';
import {Req} from './common/req';
import {AppRoutingModule} from './app-routeing.module';
import {reducer} from './reducer';
import {StoreModule} from '@ngrx/store';
import {loginReducer} from './reducer/loginReducer';

@NgModule({
  // 组件
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    SuperviseComponent,
    ResetComponent,
    UserComponent,
    RegisterComponent,
    //from demo
    BdMapComponent,
    RequestComponent,
    RequestResultComponent,
    LoginReducerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer)
  ],
  // 服务
  providers: [Req],
  bootstrap: [AppComponent],

})

export class AppModule {
}
