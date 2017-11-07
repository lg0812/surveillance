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
  menus: object[] = [{
    "menuImg": "../../../assets/images/setting.png", menuName: "abc", subs: [
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: false, path: "/supervise/order"},
      {"menuImg": "../../../assets/images/setting.png", menuName: "subabc", active: true, path: "/supervise/service"}
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

  getKeys(obj) {
    return Object.keys(obj);
  }
}
