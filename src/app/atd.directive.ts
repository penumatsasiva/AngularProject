import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appAtd]'
})
export class AtdDirective implements OnInit,OnChanges {

  @Input() customClassName:string=''
  constructor(private elementref :ElementRef) { }
  ngOnInit(): void {
    console.log(this.customClassName)
    if(this.customClassName)
    this.elementref.nativeElement.classList.add(this.customClassName)
  }


  ngOnChanges(){
    console.log(this.customClassName)
    if(this.customClassName)
    this.elementref.nativeElement.classList.add(this.customClassName)
  }
}
