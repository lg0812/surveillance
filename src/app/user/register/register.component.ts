import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {mapping} from "../../../config";
import {Store} from '@ngrx/store';
import {openToast, closeToast, openCloseToast} from "../../reducer/promptReducer";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user.component.scss', "./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  step0: any = {
    username: true,
    password: true,
    repassword: true,
    phone: true,
    vcode: true,
    email: true,
    province: true
  }
  step1: any = {
    realname: true,
    IDtype: true,
    ID: true,
    IDpath: true,
    IDpathBack: true
  }
  step2: any = {
    enterpriseLegal: true,
    enterpriseName: true,
    enterpriseSimpleName: true,
    enterpriseAddress: true,
    enterpriseLogo: true,
    enterpriseBusinessLicenses: true
  }

  step3: any = {
    organizationFullName: true
  }
  currentSteps: number = 0;
  results: string[];
  prefix = '请正确填写';
  agreeTips = '同意服务条款';
  errorInfo: { show: boolean, info: string } = {show: false, info: ''};
  registerInfo: any = {
    provinces: [
      {
        name: '请选择省份',
        id: "-1"
      }, {
        name: '上海',
        id: "1"
      }],
    citys: [{
      name: '请选择市', id: "-1"
    }, {
      name: '上海市', id: "1"
    }],
    email: '',
    username: '',
    passwd: '',
    passwdre: '',
    phone: '',
    vcode: '',
    province: '-1',
    city: '-1',

    //

    realname: '',
    IDtype: '',
    ID: '',
    IDpath: '',
    IDpathBack: '',

    //
    enterpriseLegal: '',
    enterpriseName: '',
    enterpriseSimpleName: '',
    enterpriseAddress: '',
    enterpriseLogo: '',
    enterpriseBusinessLicenses: '',

    //
    organizationSystem: '',
    organizationLeader: '',
    organizationFullName: '',
    organizationSimpleName: '',
    organizationAddress: '',
    organizationLetters: ''
  }

  authCodeTime: string = '获取手机验证码';
  authCodeTimes: number = 0;
  hero = {
    name: 'asd'
  }

  constructor(private req: Req, private store: Store<any>) {

  }

  ngOnInit(): void {
  }

  register(ev) {
    this.nextStep(null);

    console.log("验证成功，提交数据")
    console.log(this.registerInfo);

    // 提交请求
    let params: any = {
      //
      RegulatoryUnit: this.registerInfo.organizationFullName,
      RegulatoryUnitAddress: this.registerInfo.organizationSimpleName,
      RegulatoryUnitAdmin: this.registerInfo.organizationAddress,
      RegulatoryUnitSimpleName: this.registerInfo.organizationLetters,
      //
      orgAddress: this.registerInfo.enterpriseLegal,
      orgAdmin: this.registerInfo.enterpriseName,
      orgFullName: this.registerInfo.enterpriseSimpleName,
      orgLogo: this.registerInfo.enterpriseAddress,
      orgScannedDocument: this.registerInfo.enterpriseLogo,
      orgSimpleName: this.registerInfo.enterpriseBusinessLicenses,
      //
      idNumber: this.registerInfo.ID,
      name: this.registerInfo.realname,
      idPic1: this.registerInfo.IDpath,
      idPic2: this.registerInfo.IDpathBack,
      idType: this.registerInfo.IDtype,
      //
      username: this.registerInfo.username,
      password: this.registerInfo.passwd,
      mobile: this.registerInfo.phone,
      vcode: this.registerInfo.vcode,
      email: this.registerInfo.email,
      areaId: this.registerInfo.province,
      orgId: this.registerInfo.city
    }

    this.req.post(mapping.register, params).then((data) => {
      console.log(data);
    });
  }

  getAuthCode(event) {
    let time = 60;
    let t = window.setInterval(() => {
      this.authCodeTimes++;
      this.authCodeTime = (time - this.authCodeTimes) + 's后可重新获取'
      if (this.authCodeTimes == time) {
        window.clearInterval(t);
        this.authCodeTimes = 0, this.authCodeTime = '获取手机验证码';
      }
    }, 1000);

    this.req.post(mapping.verifyCode, {mobile: this.registerInfo.phone}).then((data) => {
      console.log(data, "get authcode success");
    });
  }

  statusChange(key) {
    // Object.assign(this.errorInfo, {show: false, info: ''});
    if (this.currentSteps == 0) {
      this.step0[key] = true;
    }
    if (this.currentSteps == 1) {
      this.step1[key] = true;
    }
    if (this.currentSteps == 2) {
      this.step2[key] = true;
    }
  }


  nextStep(ev) {
    console.log(this.registerInfo)
    let allowNext = true;
    let phoneReg = /^(\d){0,11}$/;
    let passrdRdg = /^.{6,12}$/;
    let emailReg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/
    if (this.currentSteps == 0) {
      if (this.registerInfo.username == '') {
        allowNext = false
        this.step0.username = false;
      }
      if (this.registerInfo.passwd == '' || !passrdRdg.test(this.registerInfo.passwd)) {
        allowNext = false
        this.step0.password = false;
      }
      if (this.registerInfo.passwd != this.registerInfo.passwdre || this.registerInfo.passwdre == '') {
        allowNext = false
        this.step0.repassword = false;
      }
      if (this.registerInfo.phone == '' || !phoneReg.test(this.registerInfo.phone)) {
        allowNext = false
        this.step0.phone = false;
      }
      if (this.registerInfo.vcode == '') {
        allowNext = false
        this.step0.vcode = false;
      }
      if (this.registerInfo.email == '' || !emailReg.test(this.registerInfo.email)) {
        allowNext = false
        this.step0.email = false;
      }
      if (this.registerInfo.province == '' || this.registerInfo.city == '' ||
        this.registerInfo.province == this.registerInfo.provinces[0].id || this.registerInfo.city == this.registerInfo.citys[0].id) {
        allowNext = false
        this.step0.province = false;
      }
    }

    else if (this.currentSteps == 1) {
      if (this.registerInfo.realname == '') {
        allowNext = false
        this.step1.realname = false;
      }
      if (this.registerInfo.IDtype == '') {
        allowNext = false
        this.step1.IDtype = false;
      }
      if (this.registerInfo.ID == '') {
        allowNext = false
        this.step1.ID = false;
      }
      if (this.registerInfo.IDpath == '') {
        allowNext = false
        this.step1.IDpath = false;
      }
      if (this.registerInfo.IDpath == '') {
        allowNext = false
        this.step1.IDpath = false;
      }
    }
    else if (this.currentSteps == 2) {
      if (this.registerInfo.enterpriseLegal == '') {
        allowNext = false
        this.step2.enterpriseLegal = false;
      }
      if (this.registerInfo.enterpriseName == '') {
        allowNext = false
        this.step2.enterpriseName = false;
      }
      if (this.registerInfo.enterpriseLogo == '') {
        allowNext = false
        this.step2.enterpriseLogo = false;
      }
      if (this.registerInfo.enterpriseBusinessLicenses == '') {
        allowNext = false
        this.step2.enterpriseBusinessLicenses = false;
      }
    }

    else if (this.currentSteps == 2) {
      if (this.registerInfo.enterpriseLegal == '') {
        allowNext = false
        this.step2.enterpriseLegal = false;
      }
      if (this.registerInfo.enterpriseName == '') {
        allowNext = false
        this.step2.enterpriseName = false;
      }
      if (this.registerInfo.enterpriseLogo == '') {
        allowNext = false
        this.step2.enterpriseLogo = false;
      }
      if (this.registerInfo.enterpriseBusinessLicenses == '') {
        allowNext = false
        this.step2.enterpriseBusinessLicenses = false;
      }
    }
    else if (this.currentSteps == 3) {
      if (this.registerInfo.organizationFullName == '') {
        allowNext = false
        this.step3.organizationFullName = false;
      }
    }
    if (allowNext && this.currentSteps < 3) {
      this.currentSteps++;
    } else {
      console.log("step0", this.step0, this.step1, this.step2);
    }
  }

  lastStep(ev) {
    this.currentSteps--;
  }

  trigerClick(ev: Event, key: string) {
    console.log(key, document.getElementById(key))
    document.getElementById(key).click();
  }

  // trigerLogoClick(ev) {
  //   document.getElementById("logoFile").click();
  // }
  //
  // licensesFileChange(ev) {
  //   document.getElementById("licensesFile").click();
  // }

  fileChange(ev, key) {
    this.statusChange(key);
    let this_ = this;
    console.log(ev.target.files[0]);
    let fileReader = new FileReader();
    fileReader.readAsDataURL(ev.target.files[0])
    fileReader.onload = function (file: any) {
      this_.registerInfo[key] = file.target.result;

    };

    let fd = new FormData();
    fd.append('idPic', ev.target.files[0]);
    fd.append('idPic', ev.target.files[0]);
    this_.req.postUpload(mapping.upload, fd).then((data) => {
      console.log(data);
      if (data.code == 1001) {
        this_.registerInfo[key] = data.result;
        openCloseToast(this_.store, {
          text: "上传成功"
        }, null);
      } else {

        openCloseToast(this_.store, {
          text: "上传失败"
        }, () => {
          this_.registerInfo[key] = '';
        });
      }

    });
  }

  stop(ev) {
    ev.stopPropagation();
  }
}
