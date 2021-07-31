import { Injectable, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  IBorrower,
  IMergeReport,
  IPublicPartition,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TransunionInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { PreferencesState, PreferencesStateModel } from '@store/preferences';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

/**
 * Service to parse and pull information from credit reports
 */
@Injectable({
  providedIn: 'root',
})
export class CreditreportService extends InterstitialService implements OnDestroy {
  /*=========================================================================================*/
  // The report, agency, and preference Behavior Subjects are to allow for easy access and parsing
  //   of the correct reports
  //   - due to complexity of report....currently held in DB as AWSJSON object
  /*=========================================================================================*/
  // easy access to the Transunion merge report
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);
  // easy access to the Transunion data without going through the full data structure
  tuAgency: TransunionInput = {} as TransunionInput;
  tuAgency$: BehaviorSubject<TransunionInput> = new BehaviorSubject({} as TransunionInput);
  // users display prefence (only show negative accounts)
  tuPreferences: PreferencesStateModel = {} as PreferencesStateModel;
  tuPreferences$: BehaviorSubject<PreferencesStateModel> = new BehaviorSubject({} as PreferencesStateModel);

  /*=========================================================================================*/
  // The tradeline, publicitem, and personal items Behavior Subjects are to track the current
  //   item the user selected to display the correct detail.
  /*=========================================================================================*/
  // the currently selected tradeline (financial accounts, etc..)
  tuTradeline: ITradeLinePartition = {} as ITradeLinePartition;
  tuTradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  // the currently selected public item (bankruptcies, etc...)
  tuPublicItem: IPublicPartition = {} as IPublicPartition;
  tuPublicItem$: BehaviorSubject<IPublicPartition> = new BehaviorSubject({} as IPublicPartition);
  // the currently selected personal item (name, address, etc...)
  tuPersonalItem: IBorrower = {} as IBorrower;
  tuPersonalItem$: BehaviorSubject<IBorrower> = new BehaviorSubject({} as IBorrower);

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  @Select(PreferencesState) preferences$!: Observable<PreferencesStateModel>;
  preferencesSub$: Subscription;

  constructor(private statesvc: StateService, private transunion: TransunionService) {
    super();
    this.agenciesSub$ = this.agencies$.pipe().subscribe((agencies: AgenciesStateModel) => {
      const tu = this.getTransunion(agencies);
      if (Object.keys(tu).length) {
        this.tuAgency$.next(tu);
        this.tuAgency = tu;
      }
      const parsedReport = this.getCreditReport(agencies);
      if (Object.keys(parsedReport).length) {
        this.tuReport$.next(parsedReport);
        this.tuReport = parsedReport;
      }
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
   * Refresh the credit report if necessary
   * @param id string
   */
  refreshCreditReport(id: string): void {
    if (!id) throw `Id missing=${id}`;
    this.transunion.refreshCreditReport(id);
  }

  /**
   * Takes the agency state model and returns the unparsed TU credit report
   *   - TUCredit report agency stored as AWS JSON string in DB
   * @param {AgenciesStateModel} agencies
   * @returns {IMergeReport}
   */
  getCreditReport(agencies: AgenciesStateModel): IMergeReport {
    if (!agencies) return JSON.parse('{}');
    const fulfillMergeReport = agencies.transunion?.fulfillMergeReport;
    const enrollMergeReport = agencies.transunion?.enrollMergeReport;
    const serviceProductString = fulfillMergeReport
      ? fulfillMergeReport?.serviceProductObject || '{}'
      : enrollMergeReport?.serviceProductObject || '{}';
    const serviceProductObject: IMergeReport = JSON.parse(serviceProductString);
    return serviceProductObject ? serviceProductObject : ({} as IMergeReport);
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
   * Returns the public item partitions from the current TU report
   * @returns {IPublicPartition[]}
   */
  getPublicItems(): IPublicPartition[] {
    if (!this.tuPublicItem) return [{} as IPublicPartition];
    const partitions = this.tuReport?.TrueLinkCreditReportType?.PulblicRecordPartition;
    if (!partitions) return [{} as IPublicPartition];
    return partitions instanceof Array ? partitions : [partitions];
  }

  /**
   * Sets the current public item partition. Can only set one at a time
   * - Makes the detail available for the public item detail view.
   * @param publicItem
   * @returns {void}
   */
  setPublicItem(publicItem: IPublicPartition): void {
    this.tuPublicItem = publicItem;
    this.tuPublicItem$.next(publicItem);
  }

  /**
   * Returns the personal item partition from the current TU report
   *  -- TU schema defines this as an array but does not appear to be correct
   * @returns {IBorrower}
   */
  getPersonalItem(): IBorrower {
    if (!this.tuPersonalItem) return {} as IBorrower;
    const partitions = this.tuReport?.TrueLinkCreditReportType?.Borrower;
    if (!partitions) return {} as IBorrower;
    return partitions instanceof Array ? partitions[0] : partitions;
  }

  /**
   * Sets the current personal item partition. Can only set one at a time
   * - Makes the detail available for the personal item detail view.
   * @param personalItem
   * @returns {void}
   */
  setPersonalItem(personalItem: IBorrower): void {
    this.tuPersonalItem = personalItem;
    this.tuPersonalItem$.next(personalItem);
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
