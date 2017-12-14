import {Component, OnInit} from '@angular/core';
import {Req} from './common/req';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private req: Req) {
  }

  ngOnInit(): void {
  }
}
