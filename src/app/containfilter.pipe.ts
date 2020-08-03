import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containfilter'
})
export class ContainfilterPipe implements PipeTransform {

  transform(datab: any): any {
    const term = [
      "https://w3id.org/bot#containsElement",
      "https://w3id.org/bot#hasStorey",
      "https://w3id.org/bot#hasSpace",
       
     ];
     
     return datab.filter(function(f) {
       return (f.p.value == term[1] || f.p.value == term[0] || f.p.value == term[2]);
           
    });
 
 
   }

}
