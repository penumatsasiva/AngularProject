import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable,of,delay, catchError, map, mergeMap, tap, forkJoin} from 'rxjs'
import { CityModel, ProductModel } from 'src/store/todo.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

private data=new BehaviorSubject<string>('test')
data$=this.data.asObservable()

updateMethid(value:string){
  this.data.next(value)
}

getProductList():Observable<ProductModel[]>{

  return of([{id:1,
    description:'suzuki',
    complted:true},
    {id:2,
      description:'maruthi',
      complted:true}
    ,{id:3,
      description:'kia',
      complted:true},
      {id:4,
        description:'honda',
        complted:true}]).pipe(delay(500))
}


public getImage():Observable<string>{
  return of()

}

public getCities():Observable<CityModel[]>{
  return of([{"name":'hyderabad',"id":1},{"name":'banglore',"id":2},{"name":'mumbai',"id":3},{"name":'pune',"id":4},{"name":'delhi',"id":5}
]

)
}
public getRepoDetails(value=''):Observable<any>{
const httpheaders=new HttpHeaders()
httpheaders.append('repo',value)
const httpparams=new HttpParams()
return this.http.get(`https://api.github.com/users/tektutorialshub/repos?search:${value}`,

).pipe(catchError((err)=>{
throw err
}))
}

public posts():Observable<any>{

  return this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
    map(obj=> {
      const field = 'id';
      const temp = obj[field as keyof typeof obj]
      return temp
    }),
    tap(obj=>console.log(obj)),
    mergeMap(id=>{
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    })
    
    )
}
public postss():Observable<any>{
const x=this.http.get('https://jsonplaceholder.typicode.com/posts/1');
const y=this.http.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);
 return   forkJoin([x,y])
}


}
