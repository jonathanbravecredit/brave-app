import { Pipe, PipeTransform } from '@angular/core';
import {
  ICreditBureauConfig,
  ITradelineCreditBureauConfig,
} from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';

export enum FindingsConfigurations {
  ShowOnUpdated = 'showOnUpdated',
  ShowOnDeleted = 'showOnDeleted',
  ShowRatingsKey = 'showRatingsKey',
  ShowDetail = 'showDetail',
  IsPopulated = 'isPopulated',
}

@Pipe({
  name: 'findingsTransformer',
})
export class FindingsTransformerPipe implements PipeTransform {
  cases = {
    [FindingsConfigurations.ShowOnUpdated]: this.showOnUpdated,
    [FindingsConfigurations.ShowOnDeleted]: this.showOnDeleted,
    [FindingsConfigurations.ShowRatingsKey]: this.showRatingsKey,
    [FindingsConfigurations.ShowDetail]: this.showDetail,
    [FindingsConfigurations.IsPopulated]: this.isPopulated,
  };

  transform(value: unknown | unknown[], condition: FindingsConfigurations): boolean {
    return this.cases[condition](value);
  }

  isPopulated(config: unknown | unknown[]): boolean {
    if (!(config instanceof Array)) return false;
    return config.length > 0;
  }

  showOnUpdated(config: unknown | unknown[]): boolean {
    if (config instanceof Array) {
      const accounts = config as ICreditBureauConfig[];
      return !!accounts.find((a) => {
        return a.summaryResultCode?.toLowerCase() !== 'deleted';
      });
    } else {
      const account = config as ICreditBureauConfig;
      return account.summaryResultCode?.toLowerCase() !== 'deleted';
    }
  }

  showOnDeleted(config: unknown | unknown[]): boolean {
    if (config instanceof Array) {
      const accounts = config as ICreditBureauConfig[];
      return !!accounts.find((a) => {
        return a.summaryResultCode?.toLowerCase() === 'deleted';
      });
    } else {
      const account = config as ICreditBureauConfig;
      return account.summaryResultCode === 'deleted';
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
