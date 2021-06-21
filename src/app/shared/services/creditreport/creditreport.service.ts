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
import { TransunionInput } from '@shared/services/aws/api.service';
import { PreferencesState, PreferencesStateModel } from '@store/preferences';

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
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$: Subject<IMergeReport> = new Subject();
  tuAgency: TransunionInput = {} as TransunionInput;
  tuAgency$: Subject<TransunionInput> = new Subject();
  tuPreferences: PreferencesStateModel = {} as PreferencesStateModel;
  tuPreferences$: Subject<PreferencesStateModel> = new Subject();

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  @Select(PreferencesState) preferences$!: Observable<PreferencesStateModel>;
  preferencesSub$: Subscription;

  constructor() {
    this.agenciesSub$ = this.agencies$
      .pipe()
      .subscribe((agencies: AgenciesStateModel) => {
        const tu = this.getTransunion(agencies);
        this.tuAgency$.next(tu);
        this.tuAgency = tu;
        const unparsed = this.getUnparsedCreditReport(agencies);
        const parsedReport = this.parseCreditReport(unparsed['#text']);
        this.tuReport$.next(parsedReport);
        this.tuReport = parsedReport;
      });
    this.preferencesSub$ = this.preferences$
      .pipe()
      .subscribe((pref: PreferencesStateModel) => {
        this.tuPreferences$.next(pref);
        this.tuPreferences = pref;
      });
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
    if (this.preferencesSub$) this.preferencesSub$.unsubscribe();
  }

  /**
   * Return the TU data from provided agency state model
   * @param {AgenciesStateModel} agencies
   * @returns
   */
  getTransunion(agencies: AgenciesStateModel): TransunionInput {
    if (!agencies.transunion) return {} as TransunionInput;
    return agencies.transunion;
  }

  /**
   * Takes the agency state model and returns the unparsed TU credit report
   *   - TUCredit report agency stored as AWS JSON string in DB
   * @param {AgenciesStateModel} agencies
   * @returns
   */
  getUnparsedCreditReport(agencies: AgenciesStateModel): IUnparsedCreditReport {
    if (!agencies) return JSON.parse('{"#text":""}');
    const serviceProductString =
      agencies.transunion?.enrollMergeReport?.serviceProductObject ||
      '{"#text":""}';
    const serviceProductObject: IUnparsedCreditReport = JSON.parse(
      serviceProductString
    );
    return serviceProductObject
      ? serviceProductObject
      : ({} as IUnparsedCreditReport);
  }

  /**
   * Parses the xml string into a JSON object of the IMergeReport form
   * @param {string} xml
   * @returns
   */
  parseCreditReport(xml: string): IMergeReport {
    const clean = xml
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#xD;/g, '');
    const report: IMergeReport = parser.parse(clean, parserOptions);
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
    if (!partitions) return [{} as ITradeLinePartition];
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
