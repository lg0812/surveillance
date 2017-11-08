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
      },
      {
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
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "服务管理",
    path: "/supervise/serviceCtrl",
    active: false
  }, {
    menuImg: "../../../assets/images/setting.png",
    menuName: "系统管理",
    active: false
  }];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  toggleMenu(path, index, subIndex) {
    if (path) {
      this.router.navigate([path]);
      for (let t = 0; t < this.menus.length; t++) {
        this.menus[t].active = false;
        if (this.menus[t].subs)
          for (const sub of this.menus[t].subs) {
            sub.active = false;
          }
      }
      this.menus[index].active = !this.menus[index].active;
    } else {
      console.log(">>>>>>>")
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
