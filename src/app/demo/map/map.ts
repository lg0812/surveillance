/**
 * Created by LG0812 on 2017/10/30.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from '../../common/req';
import {Router} from '@angular/router';
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

  constructor(private req: Req, private router: Router) {
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
    for (var t = 0; t < this.dataList.length; t++) {
      this.addPoint(this.dataList[t], t);
    }
  }

  addPoint(item, index) {
    var p = new BMap.Point(item.lat, item.lng);
    this.map.centerAndZoom(p, 13);
    var img = "../../../assets/images/jizhan.png";
    var style = {
      strokeColor: "#ff8d92",    //边线颜色。
      fillColor: "#ff8d92",      //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 1,       //边线的宽度，以像素为单位。
      strokeOpacity: 0.7,      //边线透明度，取值范围0 - 1。
      fillOpacity: 0.7,      //填充的透明度，取值范围0 - 1。
      strokeStyle: 'solid' //边线的样式，实线solid或虚线dashed。
    };


    if (item.count == 0) {
      style.strokeColor = "#ADADAD";
      style.fillColor = "#CCCCCC";
    }

    if (item.status == '待处理') {
      img = "../../../assets/images/jizhan.gif";
      style.strokeColor = "#3fa0ff";
      style.fillColor = "#3fa0ff";
    }
    var myIcon = new BMap.Icon(img, new BMap.Size(23, 25));
    var marker = new BMap.Marker(p, {icon: myIcon});  // 创建标注
    this.map.addOverlay(marker);
    this.dataList[index].marker = marker;
    var opts = {
      width: 250,
      title: "基站：" + item.orderNo
    };

    var infoWindow = new BMap.InfoWindow("当前设备：" + item.count + "个", opts);
    marker.addEventListener("click", function () {
      this.map.openInfoWindow(infoWindow, p);//打开信息窗口
    });
    var overlay = this.heartShaped(p, item.distance, item.j, style);
    this.map.addOverlay(overlay);
    this.dataList[index].overlay = overlay;
  }


  heartShaped(point2, radius, sDegree, opts) {
    console.log(point2, ">>>>>>>>>>>>>>>>>>>>>>>>")
    var rotation = 0;
    var vertexCount = 500;
    var rot = -rotation * Math.PI / 180;
    var points = [];
    var latConv = this.map.getDistance(point2, new BMap.Point(point2.lng, point2.lat + 0.1)) * 10;
    var lngConv = this.map.getDistance(point2, new BMap.Point(point2.lng + 0.1, point2.lat)) * 10;
    var step = (360 / vertexCount) || 10;
    var flop = -1;
    var I1 = 0;
    // start 弧的圆形的三点钟位置是 0 度）
    var r = 0, a = 40,

      start = 0;//,end = 0;
    start = sDegree;
    for (var i = I1; i <= 360.001 + I1; i += step) {

      flop = -1 - flop;

      //  start += Math.PI * 2 / 700;
      start += Math.PI * 2 / 500;
      //end = start + Math.PI * 2 / 700;
      // r = radius* Math.sqrt(225 / (17 - 16 * Math.sin(start) * Math.sqrt(Math.cos(start) * Math.cos(start))));
      r = radius * (1 - Math.sin(start)); //心形极坐标表

      var y = r * Math.cos(i * Math.PI / 180);
      var x = r * Math.sin(i * Math.PI / 180);
      var lng = (x * Math.cos(rot) - y * Math.sin(rot)) / lngConv;
      var lat = (y * Math.cos(rot) + x * Math.sin(rot)) / latConv;

      points.push(new BMap.Point(point2.lng + lng, point2.lat + lat));
    }


    if (opts == undefined) {
      opts = {
        strokeColor: "#514cff",    //边线颜色。
        fillColor: "#3fa0ff",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.7,      //边线透明度，取值范围0 - 1。
        fillOpacity: 0.5,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，实线solid或虚线dashed。
      };
    }
    var polygon = new BMap.Polygon(
      points
      , opts);

    return polygon;
  }
}
