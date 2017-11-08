/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  results: string[];


  ngOnInit(): void {
  }
}
