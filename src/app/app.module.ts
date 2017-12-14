import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ResetComponent} from './user/reset/reset.component';
import {UserComponent} from './user/user.component';
import {SuperviseComponent} from './supervise/supervise.component';
import {OrderComponent} from './supervise/order/order.component';
import {ServiceComponent} from './supervise/service/service.component';
import {SideBarComponent} from './supervise/sidebar/sidebar.component';
import {HeaderComponent} from './supervise/header/header.component';
import {RequestComponent} from './demo/request/request';
import {BdMapComponent} from './demo/map/map';
import {LoginReducerComponent} from './demo/reducer/reducer.component';
import {RequestResultComponent} from './demo/request.result/request.result';
import {UserAuthComponent} from './supervise/userAuth/userAuth.component';
import {PylonAuthComponent} from './supervise/pylonAuth/pylonAuth.component';
import {DeviceComponent} from './supervise/device/device.component';
import {NetComponent} from './supervise/net/net.component';
import {PromptComponent} from './prompt/prompt.component';
import {ServiceCtrlComponent} from './supervise/serviceCtrl/serviceCtrl.component';
import {SystemCtrlComponent} from './supervise/systemCtrl/systemCtrl.component';
import {ResourceComponent} from './supervise/resource/resource.component';
import {Req} from './common/req';
import {MapService} from './service/map.service';
import {AppRoutingModule} from './app-routeing.module';
import {reducer} from './reducer';
import {StoreModule} from '@ngrx/store';
import {BsDropdownModule, BsDatepickerModule, ButtonsModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import {defineLocale} from 'ngx-bootstrap/bs-moment';
import {zhCn} from 'ngx-bootstrap/locale';
import {UserAccountComponent} from "./supervise/userAccount/userAccount.component";
import {AllocationComponent} from './supervise/allocation/allocation.component';
import {StopDirective} from "./directive/stopDirective";
import {SortDirective} from "./directive/sortDirective";
import {BindDeviceComponent} from './supervise/bindDevice/bindDevice.component';

defineLocale(zhCn.abbr, zhCn);

@NgModule({
  // 声明哪些组件、指令、管道属于该模块
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    SuperviseComponent,
    ResetComponent,
    UserComponent,
    RegisterComponent,
    SideBarComponent,
    OrderComponent,
    ServiceComponent,
    UserAuthComponent,
    PylonAuthComponent,
    DeviceComponent,
    NetComponent,
    ServiceCtrlComponent,
    SystemCtrlComponent,
    PromptComponent,
    UserAccountComponent,
    ResourceComponent,
    StopDirective,//阻止冒泡指令
    SortDirective,//排序指令
    //from demo
    BdMapComponent,
    RequestComponent,
    RequestResultComponent,
    LoginReducerComponent,
    HeaderComponent,
    AllocationComponent,
    BindDeviceComponent
  ],
  //导入其它模块，从其它模块中获得本模块所需的组件、指令和管道。
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot({autoClose: true}),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    StoreModule.provideStore(reducer),
    FormsModule
  ],
  //公开某些类，以便其它的组件模板可以使用它们。
  exports: [],
  // 在应用程序级提供服务，以便应用中的任何组件都能使用它。
  providers: [Req, MapService],
  // 根模块，我们将通过引导根模块来启动应用。
  bootstrap: [AppComponent],

})

export class AppModule {
}
