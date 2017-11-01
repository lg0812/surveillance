import {Component, OnInit} from '@angular/core';
import {Req} from './common/req';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private req: Req) {
    console.log(req);
  }

  ngOnInit(): void {
    // console.log(this.req.get('january/wx/test_success', {str: 'abc'}));
    // this.req.reqUtils({
    //   path: 'january/goods/details', data: {goodsId: 1}, method: 'POST', success: function (data) {
    //     console.log(data);
    //   }
    // });
  }
}
