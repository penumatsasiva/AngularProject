import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';
import { CityModel } from 'src/store/todo.model';
import { Subject, Subscription, debounceTime, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  cities:CityModel[]
  repos:any[]
private subscription:Subscription;
  private search:Subject<string>
constructor(private testService:TestService){

}
ngOnInit(){
  this.search=new Subject()
  // this.getCities();
  this.search.pipe(debounceTime(500),takeUntil(this.search),switchMap(search=>{
    return this.testService.getRepoDetails(search)
  })).subscribe((data)=>{
   
  })

  this.testService.posts().subscribe(data=>{
    console.log(data)
  })
  this.testService.postss().subscribe(data=>{
    console.log(data)
  })

    }
  

getCities(){

  this.testService.getCities().subscribe(data=>{
    this.cities=data;
    console.log(this.cities)

  })
}
getRepos(reponame:string){

  this.testService.getRepoDetails(reponame).subscribe(data=>{
    this.repos=data;
    console.log(this.repos)

  },
  (error) => {                              //error() callback
          console.error('Request failed with error')
       
        },)
}


fetchData(obj:any){
console.log(obj.target.value)
this.search.next(obj.target.value)
}

}



