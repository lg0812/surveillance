/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {defineLocale} from 'ngx-bootstrap/bs-moment';
import {zhCn} from 'ngx-bootstrap/locale';

defineLocale('zh-cn', zhCn);

@Component({
  selector: 'app-resource',
  templateUrl: './allocation.component.html',
  styleUrls: ['../device/device.component.scss']
})
export class AllocationComponent implements OnInit {
  constructor(private req: Req) {
  }
  inLineDetailInfo = false;//在网详细信息切换
  outLineDetailInfo = false;//不在网详细信息切换
  onlineFlag = false;//在网详情里tab切换
  outLineFlag = false;//不在网详情里tab切换

  //添加设备字段
  addResourceInfo = {
    NM:'',
    type:'无人机管制设备',
    status:'正常',
    contact:'',
    user:'',
    branch:'',
    province:'',
    city:'',
    address:'',
    latitude:'',
    longitude:''
  };

  errorInfo = '';
  errNMFlag = false;
  errLongitudeFlag = false;
  errLatitudeFlag= false;
  errContactFlag = false


  inServiceList = [
    {
      id:'1',
      resouceId:'D2017080151001001',
      deviceId:'SH-001-01',
      SN:'4934834898',
      userFirm:'无锡硕放机场',
      date:'2018/09/08 12:20:09'
    },
    {
      id:'2',
      resouceId:'D2017080151001002',
      deviceId:'SH-001-02',
      SN:'4934834892',
      userFirm:'无锡硕放机场',
      date:'2018/09/08 12:20:09'
    }
  ];

  ngOnInit(): void {
  }

  addDevice() {
    let self = this, errorMsg = [];
    self.errorInfo = '';
    if ( !self.addResourceInfo.NM ) {
      errorMsg.push('资源编号');
      self.errNMFlag = true;
    }
    if ( !self.addResourceInfo.longitude ) {
      errorMsg.push('经度');
      self.errLongitudeFlag = true;
    }
    if ( !self.addResourceInfo.latitude ) {
      errorMsg.push('纬度');
      self.errLatitudeFlag = true;
    }
    if ( !/^1[34578]\d{9}$/.test(self.addResourceInfo.contact)) {
      errorMsg.push('责任人联系方式');
      self.errContactFlag = true;
    }
    console.log(errorMsg.length);
    if (errorMsg.length) {
      console.log('error')
      self.errorInfo += '请将信息填写完整' + errorMsg.join('、');
    } else {
      console.log(self.addResourceInfo);
      // self.req.post(url, { self.addResourceInfo }).then((data) => {
      //   console.log(data);
      //
      // });
    }
  }
  maxSize:number = 5;
  bigTotalItems:number = 100;
  bigCurrentPage:number = 1;


  numPages:number = 0;
  pageChanged(event:any):void {
    let self = this;
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    // self.req.get(url, { }).then((data) => {
    //   console.log(data);
    //
    // });
  }



}
