/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html'
})
export class SideBarComponent implements OnInit {
  menus: object[] = [{
    "menuImg": "abc", menuName: "abc", subs: [
      {"menuImg": "abc", menuName: "subabc"},
      {"menuImg": "abc", menuName: "subabc"}
    ]
  }, {
    "menuImg": "abc", menuName: "abc", subs: [
      {"menuImg": "abc", menuName: "subabc"},
      {"menuImg": "abc", menuName: "subabc"}
    ]
  }];


  ngOnInit(): void {
  }

  getKeys(obj) {
    return Object.keys(obj);
  }
}
