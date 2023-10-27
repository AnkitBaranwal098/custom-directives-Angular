import {Directive, ElementRef} from "@angular/core";

@Directive({
    // [] defines or tells Angular to treat this selector as attribute element
    selector : '[appBasicHighlight]',
})

export class BasicHighlightDirective{

    // elementRef is the reference of the element on which the directive was placed on
    // since it is the referenc eto some element we are using or assigning it's type to ElementRef
    // To make this data accessble in class everywhere we will use private before it.This will make it a property of this class
    constructor(private elementRef:ElementRef){
        
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = "red";
    }

}

// To use this directive we need to do two things

// 1. First like for a component we need to inform Angular we have a new directive.So we go to AppComponent.module.ts and in declarations we add BasicHighlightDirective which is the directive name.

// 2. Now that we inform Angular we can use this directive now we use it in app.component.html File.

