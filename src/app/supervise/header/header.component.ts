/**
 * Created by LG0812 on 2017/10/31.
 */
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {bsConfig} from "../../common/common";
import {mapping} from "../../../config";
import {Req} from "../../common/req";
import {Router} from "@angular/router";
import {openCloseToast} from "../../reducer/promptReducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input('searchHandler') searchHandler: any;
  @Output() searchHandler = new EventEmitter<any>();
  @Input('options') options: any = {
    showDate: false,
    auditType: false,
  };
  status: { isopen: boolean, searchOpen: boolean } = {isopen: false, searchOpen: false};
  userInfo: any = {};
  loginRd: any = {};
  bsConfig: any = bsConfig;
  datepickerStartModel: Date;
  datepickerEndModel: Date;
  searchType: string;

  constructor(private store: Store<any>, private req: Req, private router: Router) {
    this.loginRd = store.select("loginRd");
  }

  ngOnInit(): void {
    this.loginRd.subscribe((state) => {
      console.log(state);
      this.userInfo = state.userInfo;
    });
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
    this.status.searchOpen = false;
  }

  toggleDropdownSearch($event: MouseEvent): void {
    this.status.searchOpen = !this.status.searchOpen;
    this.status.isopen = false;
  }


  change(value: boolean): void {
    this.status.isopen = value;
  }

  changeSearch(value: boolean): void {
    this.status.searchOpen = value;
  }

  search(ev) {
    console.log('search...');
    this.toggleDropdownSearch(null);
    this.searchHandler.emit({
      startTime: this.datepickerStartModel,
      endTime: this.datepickerEndModel,
      searchType: this.searchType
    });
  }

  loginOut(ev) {
    this.req.get(mapping.logout, {}).then((data) => {
      sessionStorage.clear();
      openCloseToast(this.store, {
        text: '注销成功'
      }, () => {
        this.router.navigate(['/user/login']);
      });
    });
  }
}
