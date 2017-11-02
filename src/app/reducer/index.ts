/**
 * Created by LG0812 on 2017/11/2.
 */

import {combineReducers, ActionReducer} from '@ngrx/store';
import * as loginReducer from "./loginReducer"
import {environment} from '../../environments/environment';
// export interface State {
//   loginRdr: loginReducer.State;
// }

const reducers = {
  loginRd: loginReducer.loginReducer,
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
