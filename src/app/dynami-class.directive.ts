import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dynamiClass]'
})
export class DynamiClassDirective implements OnInit {
@Input()dynamiClass:string;
constructor(private elementRef:ElementRef,private renderer2:Renderer2) { 
}
ngOnInit(): void {
  this.renderer2.addClass(this.elementRef.nativeElement,this.dynamiClass)
}

}
