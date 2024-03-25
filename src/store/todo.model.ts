import { FormControl } from "@angular/forms"

export interface ProductModel{
    id:number,
    description:string,
    complted:boolean
}

export interface CityModel{
    id:number,
    name:string,
}
export interface ContactFormModel{
    "firstname"?:FormControl<string>,
    "lastname"?:FormControl<string>,
    "age"?:FormControl<number>,
    "married"?:FormControl<boolean>,
    "gender"?:FormControl<string>
  }