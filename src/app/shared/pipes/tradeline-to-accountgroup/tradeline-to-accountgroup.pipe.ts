import { Pipe, PipeTransform } from '@angular/core';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'tradelineToAccountgroup',
})
export class TradelineToAccountgroupPipe implements PipeTransform {
  tu = TransunionUtil;
  transform(tradelines: ITradeLinePartition[], ...groups: CreditReportGroups[]): unknown {
    return this.tu.filters.filterTradelinesByCreditReportGroups(tradelines, groups);
  }
}
