import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CityModel } from 'src/store/todo.model';
import { TestService } from './test.service';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities=[]
  @ViewChild(ChildComponent) child={} as ChildComponent
  title = 'test';
  name="ssd"
  personName="siva"
constructor(private testService:TestService){
  
}
  childValueChange(value:string){
    console.log(value)

  }
  ngOnInit(){
this.getCities();
  }
  test(){
    
  }

  
  onMaterialGroupChange(event:any) {
    console.log(event);
  }

  getCities(){

    this.testService.getCities().subscribe(data=>{
  console.log(data)
    })
  }
}
