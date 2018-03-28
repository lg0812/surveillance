/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {defineLocale} from 'ngx-bootstrap/chronos';
import {zhCnLocale} from 'ngx-bootstrap/locale';
import citys from '../../common/city';
defineLocale(zhCnLocale.abbr, zhCnLocale);
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['../device/device.component.scss']
})
export class ResourceComponent implements OnInit {
  constructor(private req: Req) {
  }
  provinceList = citys.citylist;
  cityList= [];

  //添加设备字段
  addResourceInfo = {
    NM:'',
    type:'基站塔',
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
  errContactFlag = false;

  show = false;
  maxSize = 5;
  bigTotalItems = 100;
  bigCurrentPage = 1;


  numPages = 0;
  ngOnInit(): void {
  }
  selectCity(p) {
    let self = this;
    for (let i=0;i<self.provinceList.length;i++) {
      if(p == self.provinceList[i].p) {
        self.cityList = self.provinceList[i].c;
        break;
      }
    }
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
    if ( self.addResourceInfo.contact && !/^1[34578]\d{9}$/.test(self.addResourceInfo.contact)) {
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
