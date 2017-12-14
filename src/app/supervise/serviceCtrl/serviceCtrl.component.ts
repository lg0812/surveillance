import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-serviceCtrl',
  templateUrl: './serviceCtrl.component.html',
  styleUrls: ['../device/device.component.scss']
})
export class ServiceCtrlComponent implements OnInit {
  results: string[];


  ngOnInit(): void {
  }

  inServiceList = [
    {
      id:'1',
      name:'无锡无线电管理委员会',
      orderId:'D2017080151001001',
      startDate:'2017/09/08 12:20:09',
      endDate:'2018/09/08 12:20:09',
      operate:'续订'
    },
    {
      id:'2',
      name:'无锡无线电管理委员会2',
      orderId:'D2017080151001002',
      startDate:'2017/09/08 12:20:09',
      endDate:'2018/09/08 12:20:09',
      operate:'续订'
    },
  ];
  show = false;
  detailInfo = false;
  maxSize:number = 5;
  bigTotalItems:number = 100;
  bigCurrentPage:number = 1;

  numPages:number = 0;
  outNumPages:number = 0;
  outBigCurrentPage:number = 1;
  pageChanged(event:any):void {
    let self = this;
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    // self.req.get(url, { }).then((data) => {
    //   console.log(data);
    //
    // });
  }
  outPageChanged(event:any):void {
    let self = this;
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    // self.req.get(url, { }).then((data) => {
    //   console.log(data);
    //
    // });
  }
}
