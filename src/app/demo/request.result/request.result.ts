/**
 * Created by LG0812 on 2017/10/30.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from '../../common/req';

@Component({
  selector: 'app-request-result',
  templateUrl: './request.result.html'
})
export class RequestResultComponent implements OnInit {
  results: string[];

  constructor(private req: Req) {
    console.log(req);
  }

  ngOnInit(): void {
    // console.log(this.req.post('january/goods/details', {goodsId: 1}));
  }
}
