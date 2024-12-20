import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(value: any, term:any): any {
    if(term==null){
      return value
    }
    else{
      return value.filter((el:any)=>el.firstName.includes(term))
    }
  }

}
