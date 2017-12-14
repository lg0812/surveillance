/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {mapping} from "../../../config";

@Component({
  selector: 'app-userAuth',
  templateUrl: './userAuth.component.html',
  styleUrls: ['./userAuth.component.scss']
})
export class UserAuthComponent implements OnInit {

  //header 配置
  options: any = {
    showDate: true,
    auditType: false,
  }
  curTabs = 0;
  newAccoutTab: number = 0;
  pageComponent: any = {
    maxSize: 5,
    bigTotalItems: 175,
    bigCurrentPage: 1,
    hasNextPage: true
  };
  page: any = {
    pageNo: 1,
    pageSize: 10,
    queryString: ''
  };

  list: any;
  options_sort: any = {
    orderBy: true,
    reSort: (curOrderBy) => {
      console.log(curOrderBy, this, "这里是重新排序的方法");
    }
  }

  pageChanged(event: any) {
    console.log('Page changed to: ' + event.page);
    Object.assign(this.page, {
      pageNo: event.page
    });
    this.getCurrentPageData();
  }

  getCurrentPageData() {
    if (this.pageComponent.hasNextPage) {
      this.req.get(mapping.userPageListUnaudited, this.page).then(
        (data) => {
          console.log(data);
          if (data.code == 1001) {
            let res = data.result;
            this.list = res.list;
            Object.assign(this.pageComponent, {
              bigTotalItems: res.totalCount,
              hasNextPage: res.hasNextPage
            });
          }
        }
      );
    }
  }

  constructor(private  req: Req) {
    this.getCurrentPageData();
  }

  ngOnInit(): void {
  }

  exportUnauditedExcel() {

  }

  deleteById() {
  }

  exchangeHeader(index) {
    this.curTabs = index;
  }

  userDetails(user) {
    console.log(user);
    this.curTabs = 4;
  }

  exchange(index) {
    this.newAccoutTab = index;
  }

  closeSearchResultPanel() {
    this.curTabs = 1;
  }

  searchHandler(args) {
    console.log(args, this);
    this.curTabs = 2;
  }
}
