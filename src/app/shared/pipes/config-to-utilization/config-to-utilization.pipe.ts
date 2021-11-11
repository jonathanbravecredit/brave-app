import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { ICreditUtilization } from '@views/dashboard/snapshots/credit-utilization/components/credit-utilization-card/interfaces';

@Pipe({
  name: 'configToUtilization',
})
export class ConfigToUtilizationPipe implements PipeTransform {
  transform(config: ITradelineDetailsConfig | undefined, ...args: unknown[]): ICreditUtilization | undefined {
    if (!config) return;
    return {
      config,
      creditorName: config.creditorName,
      accountName: config.creditorName,
      currentBalance: config.currentBalance,
      creditLimit: config.creditLimit,
      openClosed: config.openClosed,
    };
  }
}
