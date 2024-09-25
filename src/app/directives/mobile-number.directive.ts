import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[MobileNumber]'
})
export class MobileNumberDirective {
    @HostBinding('target.value') mobileNumber : any;

constructor(private elementRef : ElementRef,private render : Renderer2){

}
    @HostListener('keydown', ['$event.target.value'])
    onEnter(value: string){
        // let test = value+"-".repeat(10-(value.length));
        // this.elementRef.nativeElement.value = test;
        // console.log(test);
    }
}