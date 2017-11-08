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
  status: { isopen: boolean, searchOpen: boolean } = {isopen: false, searchOpen: false};

  ngOnInit(): void {
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
    this.status.searchOpen = false;
  }

  toggleDropdownSearch($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.searchOpen = !this.status.searchOpen;
    this.status.isopen = false;
  }

  stopPop($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  change(value: boolean): void {
    this.status.isopen = value;
  }

  changeSearch(value: boolean): void {
    this.status.searchOpen = value;
  }
}
