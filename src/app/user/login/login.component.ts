import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as md5 from "md5";
import {Req} from "../../common/req";
import {Store} from '@ngrx/store';
import {mapping} from "../../../config";
import {openToast, closeToast, openCloseToast} from "../../reducer/promptReducer";
import {LOGIN, login_} from "../../reducer/loginReducer";
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';
import {log} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.component.scss']
})
export class LoginComponent implements OnInit {
  massage: string = '请正确填写帐号、密码、验证码';
  loginInfo: { errorInfo: string, isShow: boolean } = {errorInfo: this.massage, isShow: false};
  user: { username: string, password: string, vcode: string, vcodeName: any } = {
    username: '',
    password: '',
    vcode: '',
    vcodeName: new Date().getTime(),

  }
  vcodePath: string = mapping.validCode(this.user.vcodeName);
  singleModel: string = 'abc';

  constructor(private router: Router, private req: Req, private store: Store<any>) {
  }

  ngOnInit(): void {
    // console.log(md5('123456'));
    console.log(environment.envName);
  }

  login() {
    console.log(this.loginInfo)
    if (this.user.username == '' || this.user.password == '' || this.user.vcode == '') {
      Object.assign(this.loginInfo, {isShow: true});
      return;
    }
    this.req.post(mapping.login, {
      username: this.user.username,
      password: this.user.password,
      vcode: this.user.vcode,
      vcodeName: this.user.vcodeName

    }).then((data) => {
      if (data.code == 1001) {

        login_(this.store, data.result);
        openCloseToast(this.store, {
          text: '登陆成功'
        }, () => {
          this.router.navigate(['/supervise']);
        });
      } else {
        Object.assign(this.loginInfo, {errorInfo: data.message, isShow: true});
        this.refreshVcode();
      }
    });
  }

  userNameChange(event) {
    if (this.loginInfo.isShow)
      Object.assign(this.loginInfo, {errorInfo: this.massage, isShow: false});
  }

  passwdChange(event) {
    if (this.loginInfo.isShow)
      Object.assign(this.loginInfo, {errorInfo: this.massage, isShow: false});
  }

  vcodeChange(event) {
    if (this.loginInfo.isShow)
      Object.assign(this.loginInfo, {errorInfo: this.massage, isShow: false});


    if (event.keyCode == 13) {
      this.login();
    }
  }

  refreshVcode() {
    this.user.vcodeName = new Date().getTime();
    this.vcodePath = mapping.validCode(this.user.vcodeName);
  }
}
