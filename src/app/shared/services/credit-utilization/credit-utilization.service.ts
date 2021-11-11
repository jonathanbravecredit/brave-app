import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { TransunionInput } from '@shared/services/aws/api.service';
import { BraveUtil } from '@shared/utils/brave/brave';

@Injectable({
  providedIn: 'root',
})
export class CreditUtilizationService {
  // easy access to the Transunion merge report
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor() {
    this.agenciesSub$ = this.agencies$.pipe().subscribe((agencies: AgenciesStateModel) => {
      const parsedReport = this.getCreditReport(agencies);
      if (Object.keys(parsedReport).length) {
        this.tuReport$.next(parsedReport);
        this.tuReport = parsedReport;
      }
    });
  }

  /**
   * Return the TU data from provided agency state model
   * @param {AgenciesStateModel} agencies
   * @returns {TransunionInput}
   */
  getTransunion(agencies: AgenciesStateModel): TransunionInput {
    if (!agencies.transunion) return {} as TransunionInput;
    return agencies.transunion;
  }

  /**
   * Takes the agency state model and returns the unparsed TU credit report
   *   - TUCredit report agency stored as AWS JSON string in DB
   * @param {AgenciesStateModel} agencies
   * @returns {IMergeReport}
   */
  getCreditReport(agencies: AgenciesStateModel): IMergeReport {
    const transunion = agencies.transunion;
    return BraveUtil.parsers.parseTransunionMergeReport(transunion);
  }

  /**
   * Returns the tradeline partitions from the current TU report
   * @returns {ITradeLinePartition[]}
   */
  getTradeLinePartitions(): ITradeLinePartition[] {
    if (!this.tuReport) return [{} as ITradeLinePartition];
    const partitions = this.tuReport?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!partitions) return [{} as ITradeLinePartition];
    return partitions instanceof Array ? partitions : [partitions];
  }

  /**
   * Returns the tradeline partitions from the current TU report
   * @returns {ITradeLinePartition[]}
   */
  getRevolvingAccounts(tradelines: ITradeLinePartition[]): ITradeLinePartition[] | [] {
    if (!tradelines.length) return [];
    return tu.filters.filterTrdelinesByType(tradelines, 'r');
  }
}
