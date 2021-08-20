import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { AccountTypes } from '@shared/constants/account-types';

@Pipe({
  name: 'mergereportToTradelines',
})
export class MergereportToTradelinesPipe implements PipeTransform {
  transform(report: IMergeReport, ...args: any[]): ITradeLinePartition[] {
    const accountType = args[0];
    const partition = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!partition) return [{} as ITradeLinePartition];
    let tradelines = !(partition instanceof Array) ? [partition] : partition;
    tradelines = [...this.filterByAccountType(tradelines, accountType)];
    tradelines = [...tu.sorters.report.sortTradelineByPayStatus(tradelines)];

    return tradelines;
  }

  filterByAccountType(tradelines: ITradeLinePartition[], accountType: AccountTypes): ITradeLinePartition[] | [] {
    return tradelines.filter((item) => {
      const _accountType = tu.queries.report.getTradelineTypeDescription(item);
      return _accountType === accountType;
    });
  }
}
