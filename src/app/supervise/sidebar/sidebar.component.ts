/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  menus: any[] = [{
    menuImg: "../../../assets/images/setting.png",
    menuName: "用户管理",
    subs: [
      {
        menuImg: "../../../assets/images/setting.png",
        menuName: "用户审核",
        active: true,
        path: "/supervise/userAuth"
      }, {
        menuImg: "../../../assets/images/setting.png",
        menuName: "账号管理",
        active: true,
        path: "/supervise/userAccount"
      }, {
        menuImg: "../../../assets/images/setting.png",
        menuName: "铁塔公司",
        active: false,
        path: "/supervise/pylonAuth"
      }
    ],
    active: true
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "订单受理",
    path: "/supervise/order",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "网络监控",
    path: "/supervise/net",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "服务监控",
    path: "/supervise/service",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "设备管理",
    path: "/supervise/device",
    active: false
  },{
    menuImg: "../../../assets/images/setting.png",
    menuName: "设备绑定",
    path: "/supervise/bindDevice",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "服务管理",
    path: "/supervise/serviceCtrl",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "系统管理",
    path: "/supervise/systemCtrl",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "资源管理",
    path: "/supervise/resource",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "资源分配",
    path: "/supervise/allocation",
    active: false
  }];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.clear();
    for (let rt = 0; rt < this.menus.length; rt++) {
      if (this.menus[rt].path == this.router.url) {
        this.menus[rt].active = true;
      } else {
        if (this.menus[rt].subs)
          for (let rtSub = 0; rtSub < this.menus[rt].subs.length; rtSub++) {
            if (this.menus[rt].subs[rtSub].path == this.router.url) {
              this.menus[rt].active = true;
              this.menus[rt].subs[rtSub].active = true;
            }
          }
      }
    }
  }

  clear() {
    for (let t = 0; t < this.menus.length; t++) {
      this.menus[t].active = false;
      if (this.menus[t].subs)
        for (const sub of this.menus[t].subs) {
          sub.active = false;
        }
    }
  }

  toggleMenu(path, index, subIndex) {
    if (path) {
      this.router.navigate([path]);
      this.clear();
      this.menus[index].active = !this.menus[index].active;
    } else {
      if (subIndex != undefined) {
        for (let t = 0; t < this.menus.length; t++) {
          if (this.menus[t].subs)
            for (const sub of this.menus[t].subs) {
              sub.active = false;
            }
        }
        this.menus[index].subs[subIndex].active = true;
      } else {
        for (let t = 0; t < this.menus.length; t++) {
          if (t != index)
            this.menus[t].active = false;
        }
        this.menus[index].active = !this.menus[index].active;
      }
    }
  }
}
