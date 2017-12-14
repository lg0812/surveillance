/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {defineLocale} from 'ngx-bootstrap/bs-moment';
import {zhCn} from 'ngx-bootstrap/locale';
import {mapping} from "../../../config";
import {openToast, closeToast, openCloseToast} from "../../reducer/promptReducer";
import {Store} from '@ngrx/store';
defineLocale('zh-cn', zhCn);

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  constructor(private req: Req,private store:Store<any>) {
  }
  bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, {locale: 'zh-cn', containerClass: 'theme-blue'});

  //添加设备字段
  addDeviceInfo = {
    deviceNumber:'',
    deviceType:1,
    deviceSource:'中交遥感',
    deviceStatus:'0',
    contactMan:'',
    contactMobile:'',
    orderNum:'',
    user:'',
    startDate:'',
    endDate:''
  };
  errorInfo = '';
  errNMFlag = false;
  errOwnerFlag = false;
  errContactFlag= false;
  errOrderNumFlag = false;
  errUserFlag = false;
  errEndDateFlag = false;
  errStartDateFlag = false;

  show = false;
  //pagination
  idleTotalItems = 59;//闲置设备总数据条数
  idelPageNo = 1;
  itemsPerPage = 10;//每页数据条数，默认10条
  serviceTotalItems = 67;//服役设备总数据总条数
  servicePageNo = 1;
  idleList = [
    {
      id:0,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:1,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:0,
    },
    {
      id:1,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:2,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:3,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:4,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:5,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:6,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:7,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:8,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    },
    {
      id:9,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:1,
    }
  ];

  serviceList = [
    {
      id:0,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      towerNum:'SH-001-01',
      deviceType:0,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:2,
    },
    {
      id:1,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      towerNum:'SH-001-02',
      deviceType:1,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:3,
    },
    {
      id:1,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      towerNum:'SH-001-02',
      deviceType:1,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:4,
    },
    {
      id:1,
      deviceNumber:'GBJC-001-02',
      deviceSN:'8938372884',
      towerNum:'SH-001-02',
      deviceType:1,
      instorageTime:'2017/09/08 12:20:09',
      deviceStatus:5
    }
  ]
  ngOnInit(): void {

    this.queryIdleDevice('');
    this.queryServerDevice('');
  }

  //添加设备
  addDevice() {
    let self = this, errorMsg = [];
    self.errorInfo = '';
    if ( !self.addDeviceInfo.deviceNumber ) {
      errorMsg.push('设备编号');
      self.errNMFlag = true;
    }
    if ( !self.addDeviceInfo.contactMan ) {
      errorMsg.push('责任人');
      self.errOwnerFlag = true;
    }
    if (!self.addDeviceInfo.contactMobile || !/^1[34578]\d{9}$/.test(self.addDeviceInfo.contactMobile)) {
      errorMsg.push('责任人联系方式');
      self.errContactFlag = true;
    }
    // if ( !self.addDeviceInfo.orderNum ) {
    //   errorMsg.push('订单编号');
    //   self.errOrderNumFlag = true;
    // }
    // if ( !self.addDeviceInfo.user ) {
    //   errorMsg.push('用户单位');
    //   self.errUserFlag = true;
    // }
    // if ( !self.addDeviceInfo.startDate ) {
    //   errorMsg.push('起始日期');
    //   self.errStartDateFlag = true;
    // }
    // if ( !self.addDeviceInfo.endDate ) {
    //   errorMsg.push('结束日期');
    //   self.errEndDateFlag = true;
    // }

    console.log(errorMsg.length);
    if (errorMsg.length) {
      console.log('error')
      self.errorInfo += '请将信息填写完整' + errorMsg.join('、');
    } else {
      console.log(self.addDeviceInfo);

      self.req.post(mapping.addDevice, self.addDeviceInfo ).then((res) => {
        console.log(res);
        if (res.ok) {
          console.log('添加成功！');
        } else {
          console.log('添加失败，请稍后再试！');
        }
      });
    }
  }

  //闲置设备查询
  queryIdleDevice(event:any):void {
    let self = this;
    if (event) {
      self.idelPageNo = event.page;
      self.itemsPerPage = event.itemsPerPage;
    }
    console.log('Page changed to: ' + event.page+',Number items per page: ' + event.itemsPerPage);
    openToast(self.store, {
      promptType:1
    });
    self.req.get(mapping.queryUnuserDevice, { pageNo:self.idelPageNo,pageSize:self.itemsPerPage }).then((res) => {
      console.log(res);

      if(res.code == 1001) {
        // self.idleTotalItems = res.result.totalCount;
        // self.idleList = res.result.list;
      } else {

      }
      closeToast(self.store);
    });
  }
  //查询服役设备
  queryServerDevice(event:any):void {
    let self = this;
    if(event) {
      self.idelPageNo = event.page;
      self.servicePageNo = event.itemsPerPage;
    }
    console.log('Page changed to: ' + event.page+',Number items per page: ' + event.itemsPerPage);
    openToast(self.store, {
      promptType:1
    });
    self.req.get(mapping.queryUserDevice, { pageNo:self.servicePageNo,pageSize:self.itemsPerPage }).then((res) => {
      console.log(res);
      if(res.code == 1001) {
        // self.serviceTotalItems = res.result.totalCount;
        // self.serviceList = res.result.list;
      }else {

      }
      closeToast(self.store);

    });
  }
  //设备类型转换
  changeDeviceType(type) {
    if(type == 0) {//0-在库   1-报废  2-工程   3-在网   4-维修   5-服务结束
      return '在库';
    } else if (type == 1) {
      return '报废';
    } else if (type == 2) {
      return '工程';
    } else if (type == 3) {
      return '在网';
    } else if (type == 4) {
      return '维修';
    } else if (type == 5) {
      return '服务结束';
    }
  }
}
