import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReactiveDirective]'
})
export class ReactiveDirectiveDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color","orange");
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color","transparent");
  }

}
