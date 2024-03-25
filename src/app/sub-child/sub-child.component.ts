import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Observable, Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit{

  private subject:Subject<string>;
  constructor(
    private testService:TestService
  ){

  }
  ngOnInit(): void {
    this.subject= new Subject()
    this.getCities()

    this.subject.pipe(debounceTime(1000)).subscribe((data)=>{
      console.log(data)

    })
  }
  getCities(){
    this.testService.getCities().subscribe((data)=>{console.log(data)});
  }
  change(obj:any){
this.subject.next(obj.target.value)
  }
}
