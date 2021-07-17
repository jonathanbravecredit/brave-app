import { Injectable, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  IBorrower,
  IMergeReport,
  ITradeLinePartition,
  IUnparsedCreditReport,
} from '@shared/interfaces/merge-report.interface';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as parser from 'fast-xml-parser';
import { TransunionInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { PreferencesState, PreferencesStateModel } from '@store/preferences';
import { PARSER_OPTIONS } from '@shared/services/creditreport/constants';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';

/**
 * Service to parse and pull information from credit reports
 */
@Injectable({
  providedIn: 'root',
})
export class CreditreportService implements OnDestroy {
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);
  tuTradeline: ITradeLinePartition = {} as ITradeLinePartition;
  tuTradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tuAgency: TransunionInput = {} as TransunionInput;
  tuAgency$: BehaviorSubject<TransunionInput> = new BehaviorSubject({} as TransunionInput);
  tuPreferences: PreferencesStateModel = {} as PreferencesStateModel;
  tuPreferences$: BehaviorSubject<PreferencesStateModel> = new BehaviorSubject({} as PreferencesStateModel);

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  @Select(PreferencesState) preferences$!: Observable<PreferencesStateModel>;
  preferencesSub$: Subscription;

  constructor(private statesvc: StateService) {
    this.agenciesSub$ = this.agencies$.pipe().subscribe((agencies: AgenciesStateModel) => {
      const tu = this.getTransunion(agencies);
      this.tuAgency$.next(tu);
      this.tuAgency = tu;
      const unparsed = this.getUnparsedCreditReport(agencies);
      const parsedReport = this.parseCreditReport(unparsed['#text']);
      console.log('parsed report => ', parsedReport);
      this.tuReport$.next(parsedReport);
      this.tuReport = parsedReport;
    });
    this.preferencesSub$ = this.preferences$.pipe().subscribe((pref: PreferencesStateModel) => {
      this.tuPreferences$.next(pref);
      this.tuPreferences = pref;
    });
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
    if (this.preferencesSub$) this.preferencesSub$.unsubscribe();
  }

  /**
   * Return the saved state snapshot on the state svc
   */
  getStateSnapshot(): { appData: AppDataStateModel } | undefined {
    return this.statesvc.state;
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
   * @returns {IUnparsedCreditReport}
   */
  getUnparsedCreditReport(agencies: AgenciesStateModel): IUnparsedCreditReport {
    if (!agencies) return JSON.parse('{"#text":""}');
    const fulfillMergeReport = agencies.transunion?.fulfillMergeReport;
    const enrollMergeReport = agencies.transunion?.enrollMergeReport;
    const serviceProductString = fulfillMergeReport
      ? fulfillMergeReport?.serviceProductObject || '{"#text":""}'
      : enrollMergeReport?.serviceProductObject || '{"#text":""}';
    const serviceProductObject: IUnparsedCreditReport = JSON.parse(serviceProductString);
    return serviceProductObject ? serviceProductObject : ({} as IUnparsedCreditReport);
  }

  /**
   * Parses the xml string into a JSON object of the IMergeReport form
   * @param {string} xml
   * @returns {IMergeReport}
   */
  parseCreditReport(xml: string): IMergeReport {
    const clean = xml.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#xD;/g, '');
    const report: IMergeReport = parser.parse(clean, PARSER_OPTIONS);
    return report;
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
   * Sets the current tradeline partition. Can only set one at a time
   * - Makes the detail available for the tradeline detail view.
   * @param tradeline
   * @returns {void}
   */
  setTradeline(tradeline: ITradeLinePartition): void {
    this.tuTradeline = tradeline;
    this.tuTradeline$.next(tradeline);
  }

  /**
   * (Asynchronous) Takes the refreshed credit report returned by the agency service and stores them in state
   * @param {AgenciesStateModel | null | undefined} agencies the string of xml questions returned by Transunion or other agency
   *
   */
  updateReport(agencies: AgenciesStateModel | null | undefined): void {
    if (!agencies) return;
    this.statesvc.updateAgencies(agencies);
  }

  /**
   * (Promise) Takes the refreshed credit report returned by the agency service and stores them in state
   * @param {AgenciesStateModel | null | undefined} agencies the string of xml questions returned by Transunion or other agency
   */
  async updateReportAsync(
    agencies: AgenciesStateModel | null | undefined,
  ): Promise<UpdateAppDataInput | null | undefined> {
    if (!agencies) throw new Error(`creditreportService:updateReportAsync=Missing agency`);
    try {
      return await this.statesvc.updateAgenciesAsync(agencies);
    } catch (err) {
      console.log('err', err);
      throw new Error(`creditreportService:updateReportAsync=${err}`);
    }
  }
}
