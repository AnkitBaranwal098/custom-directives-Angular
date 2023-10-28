import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appReactiveDirective]'
})
export class ReactiveDirectiveDirective {

  @Input() defaultColor:string = "yellow";
  @Input() highlightColor:string = "red";
  // We simply pass the css property we want to change in camel case as dom don't understand -.So with this we are telling Angular is on the element when this direcitve sits access the style property and then it's sub property which is the backgroundColor property

  // We sets it's initial value so that wee do not get any error
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color","orange");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color","transparent");
    this.backgroundColor = this.defaultColor
  }

}
