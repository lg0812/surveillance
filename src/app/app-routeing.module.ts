import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './user/login/login.component';
import {ResetComponent} from './user/reset/reset.component';
import {RegisterComponent} from './user/register/register.component';
import {UserComponent} from './user/user.component';
import {RequestComponent} from './demo/request/request';
import {BdMapComponent} from './demo/map/map';
import {RequestResultComponent} from './demo/request.result/request.result';
import {SuperviseComponent} from './supervise/supervise.component';
import {UserAuthComponent} from './supervise/userAuth/userAuth.component';
import {PylonAuthComponent} from './supervise/pylonAuth/pylonAuth.component';
import {OrderComponent} from './supervise/order/order.component';
import {ServiceComponent} from './supervise/service/service.component';
import {LoginReducerComponent} from './demo/reducer/reducer.component';
import {DeviceComponent} from './supervise/device/device.component';
import {NetComponent} from './supervise/net/net.component';
import {ServiceCtrlComponent} from './supervise/serviceCtrl/serviceCtrl.component';
import {SystemCtrlComponent} from './supervise/systemCtrl/systemCtrl.component';
const appRoutes: Routes = [
  // 空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到URL /login
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch: 'full'
  },
  // 跳转到request页面
  {
    path: 'request',
    component: RequestComponent,
    // 子路由配置
    children: [{
      path: 'result',
      component: RequestResultComponent
    }]
  },
  {
    path: 'map',
    component: BdMapComponent,
  },
  {
    path: 'reducer',
    component: LoginReducerComponent,
  },
  {
    path: 'supervise',
    component: SuperviseComponent,
    children: [{
      path: 'userAuth',
      component: UserAuthComponent
    }, {
      path: 'pylonAuth',
      component: PylonAuthComponent
    }, {
      path: 'order',
      component: OrderComponent
    }, {
      path: 'service',
      component: ServiceComponent
    }, {
      path: 'device',
      component: DeviceComponent
    }, {
      path: 'serviceCtrl',
      component: ServiceCtrlComponent
    }, {
      path: 'net',
      component: NetComponent
    }, {
      path: 'systemCtrl',
      component: SystemCtrlComponent
    }]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [{
      path: '',
      redirectTo: '/user/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'reset',
      component: ResetComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }]
  },
  // 当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
  {
    path: '**',
    component: ErrorComponent
  }];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // <-- debugging purposes only  并且使用hash路由
      {enableTracing: false, useHash: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
