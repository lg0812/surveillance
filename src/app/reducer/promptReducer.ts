/**
 * Created by LG0812 on 2017/11/2.
 */
import {Action} from '@ngrx/store';

export const OPEN = 'open';
export const CLOSE = 'close';

export interface State {
  isOpen: boolean;
  info: { text: string, imgPath: string, promptType: number };
}

// promptType == 0 :操着成功提示框，info: {text: '操作成功', imgPath: '../../assets/images/right.png', promptType: 0}
// promptType == 1 :操着loading提示框，info: {promptType: 1}
const initialState: State = {
  isOpen: false,
  info: {text: '操作成功', imgPath: '../../assets/images/right.png', promptType: 0}
};


export const promptReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OPEN:
      state.isOpen = true;
      Object.assign(state.info, action.payload);
      console.log(state)
      return state
    case CLOSE:
      state.isOpen = false;
      Object.assign(state.info, {text: '操作成功', imgPath: '../../assets/images/right.png', promptType: 0});
      return state;
    //这里的default必须有，否则没有初始数据
    default:
      return state;
  }
}


export const openToast = (store, params) => {
  setTimeout(() => {
    store.dispatch({type: OPEN, payload: params});
  }, 1);
}

export const closeToast = (store) => {
  setTimeout(() => {
    store.dispatch({type: CLOSE});
  }, 1);
}


// params对象 ： { text: string, imgPath: string }
export const openCloseToast = (store, params, callback) => {
  store.dispatch({type: OPEN, payload: params});
  setTimeout(() => {
    closeToast(store);
    if (callback)
      callback();
  }, 1000);
}
