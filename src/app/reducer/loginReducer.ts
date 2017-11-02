/**
 * Created by LG0812 on 2017/11/2.
 */
import {ActionReducer, Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


export class State {
  loaded: boolean;
  loading: boolean;
  ids: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: "100"
};


export function loginReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      state.ids = "1024";
      return state
    case DECREMENT:
      return state;

    case RESET:
      return state;

    default:
      return state;
  }
}
