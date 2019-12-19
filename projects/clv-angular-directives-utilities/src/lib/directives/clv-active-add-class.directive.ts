import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[clvActiveAddClass]',
})
export class ClvActiveAddClassDirective {
  // tslint:disable-next-line:no-input-rename
    @Input('app-active-add-class') hovClass: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('mousedown') onMouseOver() {
        this.el.nativeElement.classList.add(this.hovClass);
    }

    @HostListener('mouseup') onMouseLeave() {
        this.el.nativeElement.classList.remove(this.hovClass);
    }


}
