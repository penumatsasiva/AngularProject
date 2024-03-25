import { Component, ViewChild ,OnInit, AfterViewInit} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit,AfterViewInit{
  contact:any
@ViewChild('contactForm',{static:true}) contactForm:NgForm
  ngOnInit(){
    
    this.contact={
      firstname:'siva',
      lastname:'penumatsa',
      age:30,
      married:true,
      gender:'male'
    }
   
  }

  submit(form:NgForm){
    console.log(form)
    console.log(form.value)
  }
  reset(form:NgForm){
  
    // this.contactForm.reset()
    // form.reset();
  }
  ngAfterViewInit(){
    // setTimeout(()=>{
      this.contactForm.control.patchValue({
        firstname:'ravi',
        lastname:'dandu',
        age:31,
        married:false,
        gender:'female'
      })
    // },5000)

  }

}
