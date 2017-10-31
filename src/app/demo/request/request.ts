/**
 * Created by LG0812 on 2017/10/30.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from '../../common/req';
import {Router} from '@angular/router';
@Component({
  selector: 'app-request',
  templateUrl: './request.html'
})
export class RequestComponent implements OnInit {
  results: string[];

  constructor(private req: Req, private router: Router) {
    console.log(req);
  }

  ngOnInit(): void {
    console.log(this.req.post('january/goods/details', {goodsId: 1}));
  }
}
