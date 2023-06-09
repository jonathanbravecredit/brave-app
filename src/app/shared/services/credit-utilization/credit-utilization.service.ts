import { Injectable, OnDestroy } from '@angular/core';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { AgenciesStateModel } from '@store/agencies';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { TransunionInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';

@Injectable({
  providedIn: 'root',
})
export class CreditUtilizationService implements OnDestroy {
  // easy access to the Transunion merge report
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$ = new BehaviorSubject({} as IMergeReport);
  tuReportSub$: Subscription | undefined;

  constructor(private creditReport: CreditreportService) {
    this.subscribeToCreditReport();
  }

  ngOnDestroy(): void {
    this.tuReportSub$?.unsubscribe();
  }

  subscribeToCreditReport() {
    this.tuReportSub$ = this.creditReport.tuReport$.subscribe((report) => {
      this.tuReport$.next(report);
      this.tuReport = report;
    });
  }
  /**
   * Return the TU data from provided agency state model
   * @param {AgenciesStateModel} agencies
   * @returns {TransunionInput}
   */
  getTransunion(agencies: AgenciesStateModel): TransunionInput {
    if (!agencies?.transunion) return {} as TransunionInput;
    return agencies.transunion;
  }

  /**
   * Returns the tradeline partitions from the current TU report
   * @returns {ITradeLinePartition[]}
   */
  getTradeLinePartitions(): ITradeLinePartition[] {
    if (!this.tuReport) return [{} as ITradeLinePartition];
    const partitions = this.tuReport.TrueLinkCreditReportType.TradeLinePartition;
    if (!partitions) return [{} as ITradeLinePartition];
    return partitions;
  }

  /**
   * Returns the tradeline partitions from the current TU report
   * @returns {ITradeLinePartition[]}
   */
  getRevolvingAccounts(tradelines: ITradeLinePartition[]): ITradeLinePartition[] | [] {
    if (!tradelines.length) return [];
    return tu.filters.filterTradelinesByType(tradelines, 'r');
  }

  calculateCreditUtilization(tradelines: ITradeLinePartition[]): number {
    const debtAmount = this.sumDebtAmount(tradelines);
    const totalAmount = this.sumTotalAmount(tradelines);
    const utilizationPerc = this.calcUtilzationPerc(debtAmount, totalAmount);
    return utilizationPerc;
  }

  getCreditUtilizationSnapshotStatus(tradelines: ITradeLinePartition[]): { status: string; perc: number } {
    const perc = this.calculateCreditUtilization(tradelines);
    return {
      status: this.mapUtilizationStatusToSnapshot(this.calculateCreditStatus(perc)),
      perc,
    };
  }

  sumDebtAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>((acc: number, tradePart: ITradeLinePartition) => {
      if (tradePart.Tradeline?.OpenClosed.symbol === 'C') {
        return acc;
      }
      if (tradePart.accountTypeSymbol?.toLowerCase() !== 'r') {
        return acc;
      }
      if (+(tradePart.Tradeline.GrantedTrade.CreditLimit || 0) <= 0) {
        return acc;
      }
      return acc + +tradePart.Tradeline.currentBalance!;
    }, 0);
  }

  sumTotalAmount(account: ITradeLinePartition[]): number {
    return account.reduce<number>((acc: number, tradePart: ITradeLinePartition) => {
      if (tradePart.Tradeline?.OpenClosed.symbol === 'C') {
        return acc;
      }
      if (tradePart.accountTypeSymbol?.toLowerCase() !== 'r') {
        return acc;
      }
      return acc + +(tradePart.Tradeline.GrantedTrade.CreditLimit || 0);
    }, 0);
  }

  calcUtilzationPerc(debt: number, total: number): number {
    if (total === 0) return 0;
    return Math.floor((debt / total) * 100);
  }

  calculateCreditStatus(percetangeUtilization: number | string | undefined): string {
    if (percetangeUtilization === undefined) {
      return 'closed';
    }

    if (percetangeUtilization === '<1') {
      return 'excellent';
    }

    switch (true) {
      case percetangeUtilization! <= 9:
        return 'excellent';
      case percetangeUtilization! <= 29:
        return 'good';
      case percetangeUtilization! <= 49:
        return 'fair';
      case percetangeUtilization! <= 74:
        return 'poor';
      default:
        return 'verypoor';
    }
  }

  mapUtilizationStatusToSnapshot(status: string): string {
    const mapper: Record<string, string> = {
      verypoor: 'critical',
      poor: 'semicritical',
      fair: 'danger',
      good: 'normal',
      excellent: 'safe',
    };
    return mapper[status.toLowerCase()];
  }
}
