import {Injectable} from '@angular/core';

declare let BMap;
declare let commonUtils;

@Injectable()
export class MapService {
  addPointByService(list, map, clear) {
    if (clear) {
      console.log("clear markers >>>>>>>>>>>>>>>>")
      this.remove_overlay(map)
    }
    for (let index = 0; index < list.length; index++) {
      let item = list[index];
      let p = new BMap.Point(item.lat, item.lng);
      map.centerAndZoom(p, 14);
      let img = "../../assets/images/jizhan.png";

      let style = {
        strokeColor: "#ff8d92",    //边线颜色。
        fillColor: "#ff8d92",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.7,      //边线透明度，取值范围0 - 1。
        fillOpacity: 0.7,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，实线solid或虚线dashed。
      };


      if (item.status == '待处理') {
        img = "../../../assets/images/jizhan.gif";
        style.strokeColor = "#3fa0ff";
        style.fillColor = "#3fa0ff";
      }
      let myIcon = new BMap.Icon(img, new BMap.Size(23, 25));
      let marker = new BMap.Marker(new BMap.Point(item.lat, item.lng), {icon: myIcon});  // 创建标注
      map.addOverlay(marker);
      list[index].marker = marker;

      let opts = {
        width: 250
        // title: "基站：" + item.orderNo
      };

      let this_ = this;
      commonUtils.opNet = function () {
        console.log(">>>>>>>", this_);
      };
      // let infoWindowHtml = "<div>基站：" + item.orderNo + "</div>" + "<div>当前设备："
      //   + item.count + "</div><button onclick='commonUtils.opNet()' class='position-absolute control-btn'>管制</button>"

      // let infoWindow = new BMap.InfoWindow(infoWindowHtml, opts);
      list[index].serviceOverlay = this_.serviceOverlay_({point: p, unit: list[index]}, map);
      list[index].isVisibleServiceOverlay = false;
      marker.addEventListener("click", function () {
        // marker.openInfoWindow(infoWindow, p);//打开信息窗口
        if (!list[index].isVisibleServiceOverlay) {
          map.addOverlay(list[index].serviceOverlay);
          list[index].isVisibleServiceOverlay = true;
        } else {
          console.log(list[index].serviceOverlay.isVisible())
          if (list[index].serviceOverlay.isVisible()) {
            list[index].serviceOverlay.hide();
          } else {
            list[index].serviceOverlay.show();
          }
        }
      });
      let overlay = this.heartShaped(p, item.distance, item.j, style, map);
      map.addOverlay(overlay);
      list[index].overlay = overlay;
    }
  }


  serviceOverlay_(obj, map) {
    let SimpleOverlay = function () {
      this._point = obj.point
      this._map = map;
      this._obj = obj.unit;

    }
    SimpleOverlay.prototype = new BMap.Overlay();
    SimpleOverlay.prototype.initialize = function () {
      let this_ = this;
      let div = this._div = document.createElement("div");
      div.className = "simple-map";
      let div_arrow = document.createElement("div");
      div_arrow.className = 'pure-larrow';
      div.appendChild(div_arrow);

      let divBold = document.createElement("div");
      divBold.className = "div-bold"
      let div1 = document.createElement("div");
      div1.innerHTML = '基站：' + this._obj.orderNo;


      let div2 = document.createElement("div");
      div2.innerHTML = '当前设备:' + this._obj.count;
      divBold.appendChild(div1);
      divBold.appendChild(div2);

      let button = document.createElement("button");
      button.innerHTML = '管制';
      button.className = "control-btn"
      button.onclick = function () {
        if (this_._obj.isManage) {
          button.innerHTML = "管制"
          button.className = "control-btn";
        } else {
          button.innerHTML = "取消管制"
          button.className = "control-btn cancel";
        }
        this_._obj.isManage = !this_._obj.isManage;
      }
      divBold.appendChild(button);

      div.appendChild(divBold);

//////////////////////////////////////////

      let divBottom = document.createElement("div");
      divBottom.className = 'div-bottom'
      let div3 = document.createElement("div");
      div3.innerHTML = '管制人：';

      div.appendChild(div3);
      let div4 = document.createElement("div");
      div4.innerHTML = '处理时间:';
      divBottom.appendChild(div3);
      divBottom.appendChild(div4);
      div.appendChild(divBottom);


      map.getPanes().labelPane.appendChild(div);
      this._h = this._div.clientHeight;
      return div;
    }

    SimpleOverlay.prototype.draw = function () {
      this._pixel = map.pointToOverlayPixel(this._point);
      console.log(this._pixel, this._div.clientHeight)
      this._div.style.left = ( this._pixel.x + 20) + "px";
      this._div.style.top = (this._pixel.y - (this._h / 2)) + "px";
    }

    return new SimpleOverlay();
  }


  addPointByNet(list, map, clear) {
    if (clear) {
      console.log("clear markers >>>>>>>>>>>>>>>>")
      this.remove_overlay(map)
    }
    for (let index = 0; index < list.length; index++) {
      let item = list[index];
      let p = new BMap.Point(item.lat, item.lng);
      map.centerAndZoom(p, 14);
      let img = "../../assets/images/jizhan.png";

      let style = {
        strokeColor: "#ff8d92",    //边线颜色。
        fillColor: "#ff8d92",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.7,      //边线透明度，取值范围0 - 1。
        fillOpacity: 0.7,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，实线solid或虚线dashed。
      };


      if (item.status == '待处理') {
        img = "../../../assets/images/jizhan.gif";
        style.strokeColor = "#3fa0ff";
        style.fillColor = "#3fa0ff";
      }
      let myIcon = new BMap.Icon(img, new BMap.Size(23, 25));
      let marker = new BMap.Marker(new BMap.Point(item.lat, item.lng), {icon: myIcon});  // 创建标注
      map.addOverlay(marker);
      list[index].marker = marker;

      let opts = {
        width: 250
        // title: "基站：" + item.orderNo
      };

      let this_ = this;
      commonUtils.opNet = function () {
        console.log(">>>>>>>", this_);
      };
      list[index].complexOverlay = this_.netOverlay_({point: p, item: item}, map);
      list[index].isVisibleComplexOverlay = false;
      marker.addEventListener("click", function () {
        if (!list[index].isVisibleComplexOverlay) {
          map.addOverlay(list[index].complexOverlay);
          list[index].isVisibleComplexOverlay = true;
        } else {
          console.log(list[index].complexOverlay.isVisible());
          if (list[index].complexOverlay.isVisible()) {
            list[index].complexOverlay.hide();
          } else {
            list[index].complexOverlay.show();
          }
        }
      });
      let overlay = this.heartShaped(p, item.distance, item.j, style, map);
      map.addOverlay(overlay);
      list[index].overlay = overlay;
    }
  }

  netOverlay_(obj, map) {

    let complexOverlay = function () {
      this._point = obj.point
      this._item = obj.item;
      this._map = map;

    }
    complexOverlay.prototype = new BMap.Overlay();
    complexOverlay.prototype.initialize = function () {
      let this_ = this;
      let div = this._div = document.createElement("div");
      div.className = "simple-map";
      let div_arrow = document.createElement("div");
      div_arrow.className = 'pure-larrow';
      div.appendChild(div_arrow);


      let div1 = document.createElement("div");
      div1.innerHTML = '塔站编号：';
      div1.className = 'net-map-header'
      div.appendChild(div1);


      let visibleList = [{key: 'orderNo', name: '订单编号：'}, {key: 'businessType', name: '类型：'},
        {key: 'address', name: '地址'},
        {key: 'createTime', name: '创建时间'}];
      /////////////////////
      obj.deviceList = [{}, {}, {}]
      ////////////////////

      for (let t = 0; t < obj.deviceList.length; t++) {

        let it = obj.deviceList[t];

        let div2 = document.createElement("div");
        // div2.innerHTML = visibleList[t].name + this._item[visibleList[t].key];
        let div2Header = document.createElement("div");
        div2Header.innerHTML = '设备编号：';
        div2Header.className = 'net-map-header'

        let div2Body = document.createElement("div");
        div2Body.className = "hide"
        div2Body.style.backgroundColor = "#f2f2f2"
        div2Body.style.padding = "0 15px"
        div2Body.style.lineHeight = "25px"

        div2Body.innerHTML = `
        <div>设备类型：</div>
        <div>设备来源：</div>
        <div>设备状态：</div>
        <div>设备责任人姓名：</div>
        `
        div2Header.onclick = function () {
          (div2Body.className == "hide") ? (div2Body.className = '' ) : (div2Body.className = "hide");
        }
        div2.appendChild(div2Header);
        div2.appendChild(div2Body);
        div.appendChild(div2);
      }


      map.getPanes().labelPane.appendChild(div);
      this._h = this._div.clientHeight;
      return div;
    }

    complexOverlay.prototype.draw = function () {
      this._pixel = map.pointToOverlayPixel(this._point);
      console.log(this._pixel, this._div.clientHeight)
      this._div.style.left = ( this._pixel.x + 20) + "px";
      this._div.style.top = (this._pixel.y - (this._h / 2)) + "px";
    }

    return new complexOverlay();
  }

  heartShaped(point2, radius, sDegree, opts, map) {
    sDegree = sDegree * Math.PI / 180

    // 地图描绘点的个数  设置为 半径长度的一般
    let vertexCount = 100;
    let points = [];

    // getDistance返回值的单位是米
    let latConv = map.getDistance(point2, new BMap.Point(point2.lng, point2.lat + 0.1)) * 10;
    let lngConv = map.getDistance(point2, new BMap.Point(point2.lng + 0.1, point2.lat)) * 10;

    let step = (360 / vertexCount);
    let r = 0, start = sDegree;
    for (let i = 0; i <= 360; i += step) {
      start += Math.PI * 2 / vertexCount;
      // console.log(start, ">>>>>>>>>>>")
      r = radius * (1 - Math.sin(start)); //心形极坐标表
      let y = r * Math.cos(i * Math.PI / 180);
      let x = r * Math.sin(i * Math.PI / 180);

      let lng = x / lngConv;
      let lat = y / latConv;
      // console.log(lng, lat, map.getDistance(point2, new BMap.Point(point2.lng + lng, point2.lat + lat)))

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
    let polygon = new BMap.Polygon(points, opts);

    return polygon;
  }

  //清除覆盖物
  remove_overlay(map) {
    map.clearOverlays();
  }
}
