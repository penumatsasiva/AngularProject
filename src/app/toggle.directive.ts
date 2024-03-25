import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

 private flag:boolean;
 @HostBinding('style.color') color:string;
  constructor(private elementRef:ElementRef,private renderer2:Renderer2) { }
@HostListener('click') onClick(){
  this.color='red'
  this.flag=!this.flag
  if(this.flag)
  {
    this.color='red'
  }
else{
  this.color=''
}
}




}
