import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {RequestComponent} from './demo/request/request';
import {BdMapComponent} from './demo/map/map';
import {RequestResultComponent} from './demo/request.result/request.result';

const appRoutes: Routes = [
  // 空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到URL /
  {
    path: '',
    redirectTo: '/',
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
  // 当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
  {
    path: '**',
    component: ErrorComponent
  }]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
