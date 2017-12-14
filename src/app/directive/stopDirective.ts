/**
 * Created by LG0812 on 2017/11/20.
 */
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: '[stop]'})
export class StopDirective {
  constructor(el: ElementRef) {
  }

  @HostListener('click', ['$event']) onMouseLeave(ev: Event) {
    ev.stopPropagation();
  }
}
