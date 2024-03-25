import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customuppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, suffix:string): unknown {
    
    return value.split(' ').map((x)=>x.charAt(0).toLocaleUpperCase()+x.slice(1)).join(suffix);
  }

}
