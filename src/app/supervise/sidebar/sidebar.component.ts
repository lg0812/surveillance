/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  menus: any[] = [{
    "menuImg": "../../../assets/images/setting.png", menuName: "abc", subs: [
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: true, path: "/supervise/order"},
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: false, path: "/supervise/service"}
    ],
    active: true
  }, {
    "menuImg": "../../../assets/images/setting.png", menuName: "abc", subs: [
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: false, path: "/supervise"},
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: false, path: "/supervise"}
    ], active: false
  }];


  ngOnInit(): void {
  }


  toggleMenu(ev, index, subIndex) {
    if (subIndex != undefined) {
      for (let t = 0; t < this.menus.length; t++) {
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
