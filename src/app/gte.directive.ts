import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[gteValidator]',
 providers:[{provide:NG_VALIDATORS,useExisting:GteDirective,multi:true}]
})
export class GteDirective implements Validator{

  constructor() { }
  validate(control:AbstractControl):ValidationErrors|null{
let val=control.value;
if(val<18){
  return {gte:true}
}
return null
  }

}
