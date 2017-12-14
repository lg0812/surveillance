import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {LOGIN} from '../../reducer/loginReducer';

@Component({
  selector: 'app-login',
  templateUrl: './reducer.component.html'
})
export class LoginReducerComponent implements OnInit {
  login: Observable<any>;
  loginRdInfo: object

  constructor(private store: Store<any>) {
    // 从store中取loginRd的数据
    this.login = store.select('loginRd');
  }

  ngOnInit(): void {
    this.login.subscribe((state) => {
      this.loginRdInfo = state
      console.log(this.loginRdInfo, this.store);
    })

    // this.store.dispatch({type: INCREMENT});

    this.login.subscribe((state) => {
      this.loginRdInfo = state
      console.log(this.loginRdInfo);
    });
  }
}
