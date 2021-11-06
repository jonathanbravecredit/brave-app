import { Pipe, PipeTransform } from '@angular/core';
import {
  ICreditBureauConfig,
  ITradelineCreditBureauConfig,
} from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';

export enum FindingsConfigurations {
  ShowDefinitions = 'showDefinitions',
  ShowRatingsKey = 'showRatingsKey',
  ShowDetail = 'showDetail',
}

@Pipe({
  name: 'findingsTransformer',
})
export class FindingsTransformerPipe implements PipeTransform {
  cases = {
    [FindingsConfigurations.ShowDefinitions]: this.showDefinitions,
    [FindingsConfigurations.ShowRatingsKey]: this.showRatingsKey,
    [FindingsConfigurations.ShowDetail]: this.showDetail,
  };

  transform(value: unknown | unknown[], condition: FindingsConfigurations): boolean {
    return this.cases[condition](value);
  }

  showDefinitions(config: unknown | unknown[]): boolean {
    if (config instanceof Array) {
      const accounts = config as ICreditBureauConfig[];
      return !!accounts.find((a) => {
        return a.summaryResultCode?.toLowerCase() !== 'deleted';
      });
    } else {
      const account = config as ICreditBureauConfig;
      return account.summaryResultCode !== 'deleted';
    }
  }

  showRatingsKey(config: unknown | unknown[]): boolean {
    if (config instanceof Array) {
      const trades = config as ITradelineCreditBureauConfig[];
      return !!trades.find((t) => {
        return t.summaryResultCode?.toLowerCase() !== 'deleted';
      });
    } else {
      const trade = config as ITradelineCreditBureauConfig;
      return trade.summaryResultCode?.toLowerCase() !== 'deleted';
    }
  }

  showDetail(config: unknown): boolean {
    const accounts = config as ICreditBureauConfig;
    return accounts.summaryResultCode?.toLowerCase() !== 'deleted';
  }
}
