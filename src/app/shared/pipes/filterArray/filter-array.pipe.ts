import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: any[] | undefined, filter: (arg0: any) => any): any {
    if (!array) return [];
    return array.filter((item) => {
      return filter(item);
    });
  }
}
