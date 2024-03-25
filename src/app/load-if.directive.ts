import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadIf]'
})
export class LoadIfDirective implements OnChanges {

  @Input() appLoadIf:boolean;
  constructor(private templateRef:TemplateRef<any>,private viewContinerRef:ViewContainerRef) { }
ngOnChanges(changes: SimpleChanges): void {
  if(changes["appLoadIf"].currentValue){
    this.viewContinerRef.createEmbeddedView(this.templateRef);
  }
  else{
    this.viewContinerRef.clear()
  }
 console.log(changes)
}

}
