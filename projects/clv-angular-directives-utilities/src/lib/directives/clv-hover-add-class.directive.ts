import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[clvHoverAddClass]',
})
export class ClvHoverAddClassDirective {
    @Input('app-hover-add-class') hovClass: string;

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.classList.add(this.hovClass);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.classList.remove(this.hovClass);
    }


}
