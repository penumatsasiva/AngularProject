import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Directive({
  selector: '[appStd]'
})
export class StdDirective implements OnInit ,OnChanges{

  @Input() appStd:boolean=true
  constructor(private viewContainerRef:ViewContainerRef,private templateref:TemplateRef<any>) { }

  ngOnInit(){

  }
  ngOnChanges(){
    console.log(this.appStd)
if(this.appStd){
  this.viewContainerRef.createEmbeddedView(this.templateref)
}else{
  this.viewContainerRef.clear()
}
  }
}
