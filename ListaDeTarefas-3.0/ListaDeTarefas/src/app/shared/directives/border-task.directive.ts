import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderTask]'
})
export class BorderTaskDirective {

  @Input('appBorderTask')
  borderSet!: string;

  @HostBinding('style.border')
  borderColor!: string;

  constructor() { }

  @HostListener('mouseenter')
  mouseOver(eventData: Event){
    this.borderColor = this.borderSet;
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event){
    this.borderColor = 'none';
  }

}
