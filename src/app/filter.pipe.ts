import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hoteles: any, term: any): any {
    if(term === undefined) return hoteles;

    return hoteles.filter(function(hotel) {
      return hotel.name.toLowerCase().includes(term.toLowerCase());
    })

  }

}
