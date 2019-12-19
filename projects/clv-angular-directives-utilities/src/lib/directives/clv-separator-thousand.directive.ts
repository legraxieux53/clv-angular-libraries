import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';
import {AbstractControl} from '@angular/forms';

@Directive({
    selector: '[clvSeparatorThousand]',
})
export class ClvSeparatorThousandDirective implements OnInit, AfterViewInit {

  control: AbstractControl;
  @Input('separatorThousand') set separatorThousand(data: AbstractControl) {
    try {
      this.control = data;
      data.setValue(ClvTsUtilsCommonsJs.separatorThousand(data.value));
    } catch (e) {
    }
  }
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.onKeyUp();
  }

  ngAfterViewInit(): void {
    this.onKeyUp();
  }

  @HostListener('keyup') onKeyUp() {
    try {
      this.control.setValue(ClvTsUtilsCommonsJs.separatorThousand(this.control.value));
    } catch (e) {}
  }

}
