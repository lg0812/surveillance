import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Req} from "../../common/req";
import {mapping} from "../../../config";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  constructor(private router:Router,private req: Req) {
  }
  results: string[];
  username = '';
  phone = '';
  grapCode = '';
  verifyCode = '';
  password = '';
  password2 = '';
  stepOne = false;
  stepTwo = true;
  stepThree = true;
  showTips = false;
  validateInfo = '验证码已发送，请查收！';
  sendCodeFlag = false;
  errorInfo = '';
  errUsernameInfo = false;
  errorPhoneInfo = false;
  errorCodeInfo = false;
  errorPassInfo = false;
  errorPass2Info = false;

  time = 60;
  regPhone = /^1[34578]\d{9}$/;
  ngOnInit(): void {
    // this.getGrapCode();
  }
  //获取图形验证码
  getGrapCode() {
    console.log('ee')
    let self = this;
    if (self.phone.length == 11) {
      console.log(mapping.validCode('13333333333'));
      // self.req.get(mapping.validCode('ddddd'), {  }).then((res) => {
      //   console.log(res);
      //   if (res.Code == 200) {
      //
      //   } else if ( res.Code == 201 ) {
      //
      //   }
      // });
    }

  }
  //获取验证码
  getCode() {
    let self = this,
      InterValObj;
    self.errorInfo = '';
    if (!self.phone || !self.regPhone.test(self.phone)) {
      self.errorInfo = '请正确填写手机号';
      self.showTips = true;
      setTimeout(function () {
        self.showTips = false;
      }, 1500);
    } else {
      self.sendCodeFlag = true;
      InterValObj = setInterval(() => {
        if (self.time == 0) {
          clearInterval(InterValObj);
          self.time = 60;
          self.sendCodeFlag = false;
        } else {
          this.time--;
        }
      }, 1000);
      let urlReq = mapping.verifyCode;
      console.log(urlReq);
      // self.req.get(urlReq, { mobile:self.phone }).then((res) => {
      //   console.log(res);
      //   if (res.Code == 200) {
      //
      //   } else if ( res.Code == 201 ) {
      //
      //   }
      // });
    }
  }
  //下一步
  nextStep() {
    let self = this, errorMsg = [];
    self.errorInfo = '';
    if (!self.username) {
      errorMsg.push('用户名');
      self.errUsernameInfo = true;
    }
    if (!self.phone || !/^1[34578]\d{9}$/.test(self.phone)) {
      errorMsg.push('手机号');
      self.errorPhoneInfo = true;
    }

    if ( !self.verifyCode ) {
      errorMsg.push('验证码');
      self.errorCodeInfo = true;
    }
    if (errorMsg.length) {
      self.errorInfo += '请正确填写' + errorMsg.join('、');
    }
    if ( !self.phone || !self.verifyCode) {
      self.showTips = true;
    } else {
      self.stepOne = true;
      self.stepTwo = false;
      self.stepThree = true;
    }
  }
  back() {
    this.router.navigate(['/user/login']);
  }
  //重新输入验证码
  resetPassword() {
    let self = this, errorMsg = [];
    self.errorInfo = '';
    self.showTips = true;
    if ( !self.password ) {
      errorMsg.push('密码');
      self.errorPassInfo = true;
    }
    if ( !self.password2 ) {
      errorMsg.push('确认密码');
      self.errorPass2Info = true;
    }
    if (errorMsg.length) {
      self.errorInfo += '请输入' + errorMsg.join('、');
    }
    if (self.password != self.password2) {
      self.errorInfo += '您两次输入的密码不一致';
      self.errorPassInfo = true;
      self.errorPass2Info = true;
    }

    if ( !self.password || !self.password2 || (self.password != self.password2) ) {
      self.showTips = true;
      // setTimeout(function () {
      //   self.showTips = false;
      // }, 1500);
    } else {
      self.req.get(mapping.forgotPwd, {
        "mobile": self.phone,
        "newPassword": self.password2,
        "smsCode": self.verifyCode
    }).then((res) => {
        self.errorInfo = '';
        console.log(res);
        if (res.Code == 200) {
          self.stepOne = true;
          self.stepTwo = true;
          self.stepThree = false;
        } else {
          self.errorInfo = '修改失败，请稍后再试！';
          setTimeout(function () {
            self.showTips = false;
          }, 1500);
        }
      });
    }
  }
  focus() {
    this.errorPhoneInfo = false;
    this.errorCodeInfo = false;
    this.showTips = false;
    this.errorPassInfo = false;
    this.errorPass2Info = false;
    this.errUsernameInfo = false;
  }
}
