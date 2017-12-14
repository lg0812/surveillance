/**
 * Created by LG0812 on 2017/11/2.
 */

import {combineReducers, ActionReducer} from '@ngrx/store';
import * as loginRd from "./loginReducer";
import * as promptRd from "./promptReducer";
import {environment} from '../../environments/environment';
// export interface State {
//   loginRdr: loginReducer.State;
// }

const reducers = {
  loginRd: loginRd.loginReducer,
  promptRd: promptRd.promptReducer
};

const developmentReducer: ActionReducer<any> = combineReducers(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
