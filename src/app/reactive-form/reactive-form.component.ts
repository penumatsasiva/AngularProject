import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function gte(control:AbstractControl):null|ValidationErrors{
const val=control.value
  if(!isNaN(val) && val<18){
    return {gte:true}
  }
  return null;
}
export function gte1(num:number):ValidatorFn{
  const val=num
  return (control:AbstractControl)=>{
    if(!isNaN(val) && val<num){
      return {gte:true}
    }
    return null;
  }
   
  }
  export function gte3(control:AbstractControl):Promise<ValidationErrors|null>{
    const val=control.value;
    // return (control:AbstractControl)=>{
      if(!isNaN(val) && val<18){
        // setTimeout(()=>{
          return  Promise.resolve({gte:true})
        // },2000)
       
      }
      return Promise.resolve(null)
    // }
     
    }
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  constructor(private formBuilder:FormBuilder){

  }
  contactForm:FormGroup;
  ngOnInit(): void {
  this.contactForm=this.formBuilder.group({
"firstname":['',[Validators.required,Validators.minLength(5)]],
"lastname":['',[Validators.required]],
"age":[0,[Validators.required,Validators.min(18)],[gte3]],
"married":[true],
"gender":['male']
  }) 
  this.contactForm.statusChanges.subscribe((data)=>{
    console.log("data")
console.log(data)
  })
}

  submit(){
    console.log(this.contactForm.value);
    console.log(this.contactForm);

  }
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  reset(){}
}

