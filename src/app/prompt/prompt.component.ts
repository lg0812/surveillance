/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {openToast, closeToast, openCloseToast} from '../reducer/promptReducer';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html'
})
export class PromptComponent implements OnInit {

  promptRd: Observable<any>;
  prompt: {
    isOpen: boolean;
    info: { text: string, imgPath: string, promptType: number };
  };
  info: { text: string, imgPath: string } = {text: '操作成功', imgPath: '../../assets/images/right.png'};


  constructor(private store: Store<any>) {
    // 从store中取loginRd的数据
    this.promptRd = store.select('promptRd');
  }

  ngOnInit(): void {
    // console.log(this.store)
    this.promptRd.subscribe((state) => {
      this.prompt = state;
    });
  }

  open() {
    openToast(this.store, {text: '操作成功', imgPath: '../../assets/images/right.png', promptType: 0});
  }

  close() {
    closeToast(this.store);
  }
}
