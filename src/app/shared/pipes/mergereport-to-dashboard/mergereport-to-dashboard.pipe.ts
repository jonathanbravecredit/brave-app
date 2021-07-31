import { Pipe, PipeTransform } from '@angular/core';
import { NEGATIVE_PAY_STATUS_CODES } from '@shared/constants';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';

export interface IMergereportToDashboardOutput {
  negativecard: {
    count: number;
    status: string;
  };
}

@Pipe({
  name: 'mergereportToDashboard',
})
export class MergereportToDashboardPipe implements PipeTransform {
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
    output = this.filterTradelines(this.tradeLines).addNegativeCard(output, this.tradeLines);
    console.log('pipe output ====> ', output);
    return output;
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private filterTradelines(tradeLines: ITradeLinePartition[]): MergereportToDashboardPipe {
    this.tradeLines = tradeLines.filter((item) => {
      const status = NEGATIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`];
      return !!status;
    });
    return this;
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
}
