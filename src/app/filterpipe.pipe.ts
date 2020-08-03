import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(displayedData: any, term: any): unknown {
    //check if search is undefined
    if(term === undefined) return displayedData;
    //return updated data
    return displayedData.filter(function(f){
      return f.o.value.toLowerCase().includes(term.toLowerCase());
    })
  }

}
