/**
 * Created by LG0812 on 2017/11/26.
 */
import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({selector: '[msort]'})
export class SortDirective implements OnInit {
  orderBy: string = 'asc'; // or desc

  // 配置
  @Input('options') options: any = {
    orderBy: true, //升序
    reSort: null //重排序方法
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    let span = document.createElement('span');
    span.className = this.getClassName(this.options.orderBy);
    this.el.nativeElement.appendChild(span);
  }

  @HostListener('click', ['$event'])
  onMouseClick(ev: Event) {
    ev.stopPropagation();
    let span = this.el.nativeElement.getElementsByClassName(this.getClassName(this.options.orderBy))[0];
    console.log(span, this.options)
    Object.assign(this.options, {
      orderBy: !this.options.orderBy
    });
    span.className = this.getClassName(this.options.orderBy);

    if (this.options.reSort)
      this.options.reSort(this.options.orderBy);
  }

  getClassName(flag) {
    return 'msort-' + ( flag ? 'asc' : 'desc');
  }
}
