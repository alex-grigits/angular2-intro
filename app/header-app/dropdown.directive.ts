import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive ({
    selector: '[app-dropdown]'
})

export class DropdownDirective {
    isOpen = false;
    
    open() {
        return this.isOpen = !this.isOpen;
    }
    constructor(private elementRef: ElementRef, private renderer: Renderer) {}

    // @HostBinding('class.open') get opened() {
    //     return this.isOpen;
    // }

    // @HostListener('click') open() {
    //     if(!this.isOpen)
    //         this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
    //     else
    //         this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    //     this.isOpen = !this.isOpen;
    // }

    
    // @HostListener('mouseleave') close() {
    //     this.isOpen = false;
    // }

}