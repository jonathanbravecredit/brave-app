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
  databreachcard: {
    status: string;
  };
}

@Pipe({
  name: 'mergereportToDashboard',
})
export class MergereportToDashboardPipe implements PipeTransform {
  tu = TransunionUtil;
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;

  transform(report: IMergeReport | undefined): IMergereportToDashboardOutput | undefined {
    if (report === undefined) return;
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
    } else {
      output = this.addNegativeCard(output, []);
    }
    if (this.haveForbearanceAccounts(this.tradeLines)) {
      output = this.addForbearanceCard(output);
    } else {
      output = this.addForbearanceCard(output);
    }
    output = this.addDatabreachCard(output); //TODO may need to add conditionals
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
    return tradelines.filter((item) => this.tu.queries.report.isNegativeAccount(item)).length > 0;
  }

  private haveForbearanceAccounts(tradelines: ITradeLinePartition[]): boolean {
    return tradelines.filter((item) => this.tu.queries.report.isForbearanceAccount(item)).length > 0;
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

  /**
   * Layers in the negative account data
   * @param output
   * @returns
   */
  private addDatabreachCard(output: IMergereportToDashboardOutput): IMergereportToDashboardOutput {
    return {
      ...output,
      databreachcard: {
        status: 'danger',
      },
    };
  }
}
