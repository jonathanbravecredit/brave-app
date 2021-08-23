import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'tradelineToForbearance',
})
export class TradelineToForbearancePipe implements PipeTransform {
  tu = TransunionUtil;
  transform(tradelines: ITradeLinePartition[]): ITradeLinePartition[] {
    return tradelines.filter((item) => {
      return this.tu.queries.report.isForbearanceAccount(item);
    });
  }
}
