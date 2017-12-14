/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {mapping} from "../../../config";
import {openToast, closeToast, openCloseToast} from "../../reducer/promptReducer";

@Component({
  selector: 'app-resource',
  templateUrl: './bindDevice.component.html',
  styleUrls: ['../device/device.component.scss']
})
export class BindDeviceComponent implements OnInit {
  constructor(private req: Req) {
  }


  show = false;
  deviceSNList = [];
  selectedSN = '';
  deviceSNInfo= '';
  bigTotalItems = 100;
  numPages = 0;
  ngOnInit(): void {
  }

  queryDeviceSNList () {
    let self = this;
    self.req.get(mapping.queryDeviceSNList, { }).then((res) => {
      console.log(res);
      if (res.code == 1001) {

      } else {
        console.log('wrong');
      }

    });
  }
  selectDeviceSN() {
    let self = this;
    self.req.get(mapping.queryDeviceSN, {deviceSN:self.selectedSN }).then((res) => {
      console.log(res);
      if (res.code == 1001) {
        // self.deviceSNInfo =
      } else {
        console.log('wrong');
      }

    });

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
