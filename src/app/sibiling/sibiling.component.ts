import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-sibiling',
  templateUrl: './sibiling.component.html',
  styleUrls: ['./sibiling.component.scss']
})
export class SibilingComponent {


  value:string=""
  name="siva"
  constructor(private testService:TestService){

  }
  ngOnInit(){
    this.testService.data$.subscribe((data)=>{
      this.value=data
    })
  }
}
