/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {mapping} from "../../../config";
import {openToast, closeToast} from "../../reducer/promptReducer";
import {Store} from '@ngrx/store';
import ownKeys = Reflect.ownKeys;

@Component({
  selector: 'app-userAccount',
  templateUrl: './userAccount.component.html',
  styleUrls: ['./userAccount.component.scss']
})
export class UserAccountComponent implements OnInit {
  curTabs: number = 0;
  newAccoutTab: number = 0;
  pageComponent: any = {
    maxSize: 5,
    bigTotalItems: 175,
    bigCurrentPage: 1
  };
  page: any = {
    pageNo: 1,
    pageSize: 10,
    queryString: ''
  };

  list: any;
  details: any = {
    basic: {},
    auth: {}
  }

  authInfo: any = {}


  permission: any = {
    user: {
      has: false,
      name: '用户管理',
      sub: [
        {
          has: false,
          name: '用户审核',
          readOnly: null
        }, {
          has: false,
          name: '账号管理',
          readOnly: null
        }, {
          has: false,
          name: '组织架构',
          readOnly: null
        }
      ]
    },
    service: {
      has: false,
      name: '服务管理',
      sub: [
        {
          has: false,
          name: '订单管理',
          readOnly: null
        }, {
          has: false,
          name: '订单受理',
          readOnly: null
        }, {
          has: false,
          name: '业务审批',
          readOnly: null
        }, {
          has: false,
          name: '服务管理',
          readOnly: null
        }
      ]
    },
    device: {
      has: false,
      name: '设施管理',
      sub: [
        {
          has: false,
          name: '设备管理',
          readOnly: null
        }, {
          has: false,
          name: '资源管理',
          readOnly: null
        }, {
          has: false,
          name: '资源分配',
          readOnly: null
        }
      ]
    },
    supervise: {
      has: false,
      name: '监控服务',
      sub: [
        {
          has: false,
          name: '飞防监控',
          readOnly: null
        }, {
          has: false,
          name: '网络监控',
          readOnly: null
        }
      ]
    }
  }

  options: any = {
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
    console.log(this.page)
    openToast(this.store, {
      promptType: 1
    });

    this.req.get(mapping.userPageList, this.page).then(
      (data) => {
        closeToast(this.store);
        console.log(data, "----->");
        if (data.code == 1001) {
          let res = data.result;
          this.list = res.list;
          Object.assign(this.pageComponent, {
            bigTotalItems: res.totalCount
          });
        }
      }, () => closeToast(this.store)
    );
  }


  constructor(private  req: Req, private store: Store<any>) {
  }

  ngOnInit(): void {
    this.getCurrentPageData();
  }

  deleteUserById() {
    alert("wait ... ");
  }

  exchange(index) {
    this.newAccoutTab = index;
  }

  showBasicAndAuth(user) {
    console.log(user);

    this.curTabs = 1;

    // 编辑或者查看
    if (user && user.userInfo) {
      Object.assign(this.details, {
        basic: {
          name: user.userInfo.name,
          mobile: user.userInfo.mobile,
          email: user.userInfo.email,
          nickName: user.userInfo.nickName
        },
        auth: {}
      });
    }
    //新增
    else {
      Object.assign(this.details, {
        basic: {},
        auth: {}
      });
    }

  }


  submitAuth(flag) {
    console.log(this.permission)
    if (flag) {

    } else {
      this.curTabs = 0;
    }
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  edit_(obj, parent) {
    console.log("edit_")
    obj.has = true;
    this.setParent(parent);
  }

  read_(obj, parent) {
    console.log("read_")
    obj.has = true;
    this.setParent(parent);
  }

  hasPer(obj, parent) {
    console.log(obj, parent)
    if (obj.has) {
      obj.has = false;
      obj.readOnly = null;
      parent.has = false;
    } else {
      obj.has = true;
      obj.readOnly = false;

      this.setParent(parent);
    }
  }

  setParent(parent) {
    let all = true;
    for (let t = 0; t < parent.sub.length; t++) {
      if (!parent.sub[t].has)
        all = false;
    }
    parent.has = all;
  }

  hasGroup(group) {

    if (group.has) {
      for (let t = 0; t < group.sub.length; t++) {
        group.sub[t].has = false;
        group.sub[t].readOnly = null;
      }
      // group.readOnly = null;
    } else {
      for (let t = 0; t < group.sub.length; t++) {
        if (!group.sub[t].has) {
          group.sub[t].has = true;
          group.sub[t].readOnly = false;
        }
      }
      // group.readOnly = false;
    }

    group.has = !group.has;
  }
}
