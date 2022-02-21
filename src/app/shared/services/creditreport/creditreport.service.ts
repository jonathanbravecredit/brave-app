import { Injectable, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  IBorrower,
  IMergeReport,
  IPublicPartition,
  ISubscriber,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TransunionInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { PreferencesState, PreferencesStateModel } from '@store/preferences';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { BraveUtil } from '@shared/utils/brave/brave';
import { CreditReportSelectors, CreditReportState, CreditReportStateModel } from '@store/credit-report';
import { filter } from 'rxjs/operators';

/**
 * Service to parse and pull information from credit reports
 */
@Injectable({
  providedIn: 'root',
})
export class CreditreportService implements OnDestroy {
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

  /*=========================================================================================*/
  // The Subscriber (for tradeline, publicitem) Behavior Subjects are to track the current
  //   items matching credit subscriber data for the current item selected
  //   - subscriber is irrelevant for personal
  /*=========================================================================================*/
  // the currently selected tradeline's subscriber (financial accounts, etc..)
  tuTradelineSubscriber: ISubscriber | undefined;
  tuTradelineSubscriber$: BehaviorSubject<ISubscriber> = new BehaviorSubject({} as ISubscriber);
  // the currently selected public item (bankruptcies, etc...)
  tuPublicItemSubscriber: ISubscriber | undefined;
  tuPublicItemSubscriber$: BehaviorSubject<ISubscriber> = new BehaviorSubject({} as ISubscriber);

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$!: Subscription;

  @Select(PreferencesState) preferences$!: Observable<PreferencesStateModel>;
  preferencesSub$!: Subscription;

  @Select(CreditReportState) creditReport$!: Observable<CreditReportStateModel>;
  creditReportSub$!: Subscription;

  constructor(private statesvc: StateService, private transunion: TransunionService, private store: Store) {
    this.subscribeToAgencies();
    this.subscribeToCreditReport();
    this.subscribeToPreferences();
  }

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
    if (this.preferencesSub$) this.preferencesSub$.unsubscribe();
  }

  /**
   * Subscribe to the agencies model
   */
  subscribeToAgencies(): void {
    this.agenciesSub$ = this.agencies$.subscribe((agencies: AgenciesStateModel) => {
      const tu = this.getTransunion(agencies);
      if (Object.keys(tu).length) {
        this.tuAgency$.next(tu);
        this.tuAgency = tu;
      }
    });
  }

  subscribeToCreditReport() {
    this.creditReportSub$ = this.creditReport$
      .pipe(filter((creditReport: CreditReportStateModel) => creditReport !== undefined))
      .subscribe((creditReport: CreditReportStateModel) => {
        const { report } = creditReport;
        if (report) {
          this.tuReport$.next(report);
          this.tuReport = report;
        }
      });
  }

  /**
   * Subscribe to the preferences model
   */
  subscribeToPreferences(): void {
    this.preferencesSub$ = this.preferences$.subscribe((pref: PreferencesStateModel) => {
      this.tuPreferences$.next(pref);
      this.tuPreferences = pref;
    });
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
   */
  refreshCreditReport(): void {
    this.transunion.getCreditReport();
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
    return this.tuReport.TrueLinkCreditReportType.TradeLinePartition;
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

    let subscribers = this.tuReport.TrueLinkCreditReportType.Subscriber;
    const subscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline, subscribers) || ({} as ISubscriber);
    if (subscriber === undefined) return;

    this.tuTradelineSubscriber = subscriber;
    this.tuTradelineSubscriber$.next(subscriber);
  }

  /**
   * Returns the public item partitions from the current TU report
   * @returns {IPublicPartition[]}
   */
  getPublicItems(): IPublicPartition[] {
    return this.tuReport.TrueLinkCreditReportType.PulblicRecordPartition;
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

    let subscribers = this.tuReport.TrueLinkCreditReportType.Subscriber;
    const subscriber = tu.queries.report.getPublicSubscriberByKey(publicItem, subscribers) || ({} as ISubscriber);
    if (subscriber === undefined) return;

    this.tuPublicItemSubscriber = subscriber;
    this.tuPublicItemSubscriber$.next(subscriber);
  }

  /**
   * Returns the personal item partition from the current TU report
   *  -- TU schema defines this as an array but does not appear to be correct
   * @returns {IBorrower}
   */
  getPersonalItem(): IBorrower {
    return this.tuReport.TrueLinkCreditReportType.Borrower;
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
    if (!agencies) return;
    try {
      return await this.statesvc.updateAgenciesAsync(agencies);
    } catch (err) {
      throw new Error(`creditreportService:updateReportAsync=${err}`);
    }
  }
}
