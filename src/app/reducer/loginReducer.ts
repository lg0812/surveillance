/**
 * Created by LG0812 on 2017/11/2.
 */
import {ActionReducer, Action} from '@ngrx/store';
import * as md5 from "md5";
export const LOGIN = 'login';
export const LOGINOUT = 'loginout';
declare const Buffer;

export interface State {
  online: boolean;
  userInfo: any;
}

const initialState: State = {
  online: false,
  userInfo: {}
};


export const loginReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case LOGIN:
      state.online = true;
      Object.assign(state.userInfo, action.payload);
      console.log(state);
      return state

    case LOGINOUT:
      state.online = false;
      Object.assign(state.userInfo, null);
      console.log(state);
      return state
    //这里的default必须有，否则没有初始数据
    default:
      return state;
  }
}

export const login_ = (_store, _params) => {
  console.log(_params)
  sessionStorage.setItem("at", new Buffer(new Buffer(_params.token, 'base64').toString() + "_" + _params.serverTime).toString("base64"));
  sessionStorage.setItem("ht", md5(new Buffer(_params.token, 'base64').toString() + "_" + _params.serverTime).toUpperCase());
  sessionStorage.setItem("userInfo", JSON.stringify(_params));
  _store.dispatch({type: LOGIN, payload: _params});
}


export const login_out = (_store, _params) => {
  _store.dispatch({type: LOGINOUT, payload: _params});
}
