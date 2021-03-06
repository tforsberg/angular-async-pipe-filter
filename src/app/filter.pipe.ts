import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, FilterService } from './filter.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(value: any, filterTerm: string): Observable<Country[]> {
    return this.filterService.filterCountries(filterTerm);
  }
}
