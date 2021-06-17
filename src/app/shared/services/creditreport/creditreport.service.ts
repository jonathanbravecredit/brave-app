import { Injectable, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  IBorrower,
  IMergeReport,
  ITradeLinePartition,
  IUnparsedCreditReport,
} from '@shared/interfaces/merge-report.interface';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { Observable, Subject, Subscription } from 'rxjs';
import * as parser from 'fast-xml-parser';

const parserOptions = {
  attributeNamePrefix: '',
  ignoreAttributes: false,
  ignoreNameSpace: true,
  parseAttributeValue: true,
};

/**
 * Service to parse and pull information from credit reports
 */
@Injectable({
  providedIn: 'root',
})
export class CreditreportService implements OnDestroy {
  private tuReport: IMergeReport = {} as IMergeReport;
  private tuReport$: Subject<IMergeReport> = new Subject();
  // private tuReportSub$: Subscription;

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor() {
    this.agenciesSub$ = this.agencies$
      .pipe()
      .subscribe((agencies: AgenciesStateModel) => {
        const serviceProductString =
          agencies.transunion?.enrollMergeReport?.serviceProductObject ||
          '{"#text":""}';
        const serviceProductObject: IUnparsedCreditReport = JSON.parse(
          serviceProductString
        );
        const parsedReport = this.parseCreditReport(
          serviceProductObject['#text']
        );
        this.tuReport$.next(parsedReport);
        this.tuReport = parsedReport;
        console.log('agencies', agencies, serviceProductObject);
      });
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }

  parseCreditReport(xml: string): IMergeReport {
    const clean = xml
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#xD;/g, '');
    const report: IMergeReport = parser.parse(clean, parserOptions);
    console.log('parsed report', report);
    return report;
  }

  /**
   * Returns the tradeline partitions from the current TU report
   * @returns
   */
  getTradeLinePartitions(): ITradeLinePartition[] {
    if (!this.tuReport) return [{} as ITradeLinePartition];
    const partitions = this.tuReport?.TrueLinkCreditReportType
      ?.TradeLinePartition;
    return partitions instanceof Array ? partitions : [partitions];
  }

  /**
   * Returns the borrower from the current TU report
   */
  getBorrower(): IBorrower {
    if (!this.tuReport) return {} as IBorrower;
    const borrower = this.tuReport?.TrueLinkCreditReportType?.Borrower;
    return borrower ? borrower : ({} as IBorrower);
  }
}
