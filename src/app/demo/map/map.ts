/**
 * Created by LG0812 on 2017/10/30.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from '../../common/req';
import {Router} from '@angular/router';
import {MapService} from "../../service/map.service";

declare var BMap;

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class BdMapComponent implements OnInit {
  dataList = [
    {
      id: 1,
      orderNo: 'SH-001-01',
      businessType: '机场飞防',
      address: "空港立交",
      createTime: '2017-08-10 14:00:00',
      status: '待处理',
      lat: 120.42944,
      lng: 31.510969,
      distance: 700,
      s: -30,
      e: 90,
      count: 2,
      j: 180,
      marker: null,
      overlay: null
    },
    {
      id: 2,
      orderNo: 'SH-001-02',
      businessType: '机场飞防',
      createTime: '2017-08-09 14:00:02',
      status: '已解除管制',
      lat: 120.432629,
      lng: 31.516896,
      distance: 900,
      s: -30,
      e: 90,
      count: 3,
      j: 180,
      marker: null,
      overlay: null
    },
    {
      id: 3,
      orderNo: 'SH-001-03',
      businessType: '机场飞防',
      address: "竹祥庵",
      createTime: '2017-08-07 14:00:02',
      status: '已解除管制',
      lat: 120.438522,
      lng: 31.519658,
      distance: 300,
      s: -10,
      e: 110,
      count: 3,
      j: 180,
      marker: null,
      overlay: null
    },
    {
      id: 4,
      orderNo: 'SH-001-04',
      businessType: '机场飞防',
      createTime: '2017-08-08 09:00:04',
      status: '已解除管制',
      lat: 120.446364,
      lng: 31.522983,
      distance: 700,
      s: 30,
      e: 150,
      count: 1,
      j: 180,
      marker: null,
      overlay: null
    },
    {
      id: 5,
      orderNo: 'SH-001-05',
      businessType: '机场飞防',
      createTime: '2017-08-07 18:00:05',
      status: '已解除管制',
      lat: 120.454404,
      lng: 31.521421,
      distance: 700,
      s: 80,
      e: 200,
      count: 1,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 6,
      orderNo: 'SH-001-06',
      businessType: '机场飞防',
      createTime: '2017-08-07 16:00:06',
      status: '已解除管制',
      lat: 120.454728,
      lng: 31.510462,
      distance: 700,
      s: 100,
      e: 220,
      count: 1,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 7,
      orderNo: 'SH-001-07',
      businessType: '机场飞防',
      createTime: '2017-08-07 14:00:08',
      status: '已管制',
      lat: 120.453183,
      lng: 31.505259,
      distance: 700,
      s: 160,
      e: 280,
      count: 2,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 8,
      orderNo: 'SH-001-08',
      businessType: '机场飞防',
      createTime: '2017-07-12 14:00:09',
      status: '已解除管制',
      lat: 120.44729,
      lng: 31.498301,
      distance: 700,
      s: 60,
      e: 180,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 9,
      orderNo: 'SH-001-09',
      businessType: '机场飞防',
      createTime: '2017-07-07 16:00:10',
      status: '已管制',
      lat: 120.450272,
      lng: 31.493343,
      distance: 700,
      s: 140,
      e: 260,
      count: 4,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 10,
      orderNo: 'SH-001-10',
      businessType: '机场飞防',
      createTime: '2017-07-07 14:00:11',
      status: '已解除管制',
      lat: 120.446984,
      lng: 31.485245,
      distance: 700,
      s: 160,
      e: 280,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 11,
      orderNo: 'SH-001-11',
      businessType: '机场飞防',
      createTime: '2017-06-13 15:00:30',
      status: '已解除管制',
      lat: 120.440027,
      lng: 31.478928,
      distance: 700,
      s: 200,
      e: 320,
      count: 8,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 12,
      orderNo: 'SH-001-12',
      businessType: '机场飞防',
      createTime: '2017-06-12 13:00:40',
      status: '已解除管制',
      lat: 120.429027,
      lng: 31.480356,
      distance: 700,
      s: 240,
      e: 360,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    },
    {
      id: 14,
      orderNo: 'SH-001-14',
      businessType: '机场飞防',
      createTime: '2017-06-09 14:00:40',
      status: '已解除管制',
      lat: 120.42918,
      lng: 31.491904,
      distance: 700,
      s: -80,
      e: 40,
      count: 5,
      j: 0,
      marker: null,
      overlay: null
    },
    {
      id: 15,
      orderNo: 'SH-001-15',
      businessType: '机场飞防',
      createTime: '2017-06-08 13:00:40',
      status: '已解除管制',
      lat: 120.431192,
      lng: 31.499378,
      distance: 700,
      s: 220,
      e: 360,
      count: 5,
      j: 0,
      marker: null,
      overlay: null
    },
    {
      id: 16,
      orderNo: 'SH-001-16',
      businessType: '机场飞防',
      createTime: '2017-06-08 12:00:40',
      status: '已解除管制',
      lat: 120.426611,
      lng: 31.501002,
      distance: 700,
      s: -60,
      e: 60,
      count: 5,
      j: 180,
      marker: null,
      overlay: null
    }
  ];
  map = null;

  constructor(private req: Req, private router: Router, private mapService: MapService) {
    console.log(req);
  }

  ngOnInit(): void {
    // console.log(this.req.post('january/goods/details', {goodsId: 1}));
    this.initBmap();

  }

  initBmap() {
    this.map = new BMap.Map("allmap");
    var point = new BMap.Point(116.404, 39.915);
    // this.map.centerAndZoom(point, 18);
    this.map.enableScrollWheelZoom(true);
    this.map.addControl(new BMap.NavigationControl());
    this.mapService.addPointByService(this.dataList, this.map, true);
  }


}
