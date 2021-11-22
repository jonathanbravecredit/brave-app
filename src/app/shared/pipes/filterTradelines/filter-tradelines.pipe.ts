import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';

@Pipe({
  name: 'filterTradelines',
})
export class FilterTradelinesPipe implements PipeTransform {
  transform(tradelines: ITradeLinePartition[], filter: (arg0: any) => any): ITradeLinePartition[] {
    return tradelines.filter((item) => {
      return filter(item);
    });
  }
}
