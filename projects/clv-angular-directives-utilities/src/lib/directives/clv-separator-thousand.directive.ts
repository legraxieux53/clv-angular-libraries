import {AfterViewInit, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';

@Directive({
    selector: '[clvSeparatorThousand]',
})
export class ClvSeparatorThousandDirective implements OnInit, AfterViewInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.onKeyUp();
    }

    ngAfterViewInit(): void {
      this.onKeyUp();
    }

  @HostListener('keyup') onKeyUp() {
        this.el.nativeElement.value = ClvTsUtilsCommonsJs.separatorThousand(this.el.nativeElement.value);
    }

}
