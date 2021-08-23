import { Pipe, PipeTransform } from '@angular/core';
import { NEGATIVE_PAY_STATUS_CODES } from '@shared/constants';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

export interface IMergereportToDashboardOutput {
  negativecard: {
    count: number;
    status: string;
  };
  forbearancecard: {
    status: string;
  };
}

@Pipe({
  name: 'mergereportToDashboard',
})
export class MergereportToDashboardPipe implements PipeTransform {
  tu = TransunionUtil;
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;

  transform(report: IMergeReport): IMergereportToDashboardOutput {
    let output: IMergereportToDashboardOutput = {} as IMergereportToDashboardOutput;
    this.tradeLines = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!this.tradeLines) {
      return this.addNegativeCard(output, []); // TODO add more parse when they come on line;
    }
    if (!(this.tradeLines instanceof Array)) {
      this.tradeLines = [this.tradeLines];
    }
    this.filterTradelines(this.tradeLines);
    if (this.haveNegativeAccounts(this.tradeLines)) {
      output = this.addNegativeCard(output, this.tradeLines);
    }
    if (this.haveForbearanceAccounts(this.tradeLines)) {
      output = this.addForbearanceCard(output);
    }
    return output;
  }

  /**
   * Filters the tradeline by the negative status code and forbearance accounts
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private filterTradelines(tradeLines: ITradeLinePartition[]): MergereportToDashboardPipe {
    this.tradeLines = tradeLines.filter((item) => {
      const isNegative = this.tu.queries.report.isNegativeAccount(item);
      const isForbearance = this.tu.queries.report.isForbearanceAccount(item);
      return isNegative || isForbearance;
    });
    return this;
  }

  private haveNegativeAccounts(tradelines: ITradeLinePartition[]): boolean {
    return !!tradelines.find((item) => this.tu.queries.report.isNegativeAccount(item));
  }

  private haveForbearanceAccounts(tradelines: ITradeLinePartition[]): boolean {
    return !!tradelines.find((item) => this.tu.queries.report.isNegativeAccount(item));
  }

  /**
   * Layers in the negative account data
   * @param output
   * @param accounts
   * @returns
   */
  private addNegativeCard(
    output: IMergereportToDashboardOutput,
    accounts: ITradeLinePartition[],
  ): IMergereportToDashboardOutput {
    const status = accounts.length > 0 ? 'critical' : 'safe'; // TODO need a more sophisticated way to determine this
    return {
      ...output,
      negativecard: {
        count: accounts.length,
        status: status,
      },
    };
  }

  /**
   * Layers in the negative account data
   * @param output
   * @returns
   */
  private addForbearanceCard(output: IMergereportToDashboardOutput): IMergereportToDashboardOutput {
    return {
      ...output,
      forbearancecard: {
        status: 'danger',
      },
    };
  }
}
