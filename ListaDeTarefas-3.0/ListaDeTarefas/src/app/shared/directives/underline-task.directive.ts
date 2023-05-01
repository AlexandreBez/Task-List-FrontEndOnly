import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderlineTask]'
})
export class UnderlienTaskDirective {

  constructor(
    private elementref: ElementRef
  ) { }

  @HostListener('mouseenter')
  mouseOver(eventData: Event){
    this.elementref.nativeElement.style.textDecoration = "underline";
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event){
    this.elementref.nativeElement.style.textDecoration = "none";
  }

}
