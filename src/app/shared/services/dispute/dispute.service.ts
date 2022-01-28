import { Injectable, OnDestroy } from '@angular/core';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IDispute } from '@shared/interfaces/disputes';
import { IErrorResponse } from '@shared/interfaces';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { SafeListMonitoringService } from '@shared/services/safeListMonitoring/safe-list-monitoring.service';
import { MonitorClickEvents } from '@shared/services/safeListMonitoring/constants';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  /*===========================================================================*/
  // these behavior subjects help track which are the current items
  //   being disputed. Can be either account, personal, public
  /*===========================================================================*/
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$!: Subscription | undefined;

  publicItem: IPublicPartition | undefined;
  publicItem$: BehaviorSubject<IPublicPartition> = new BehaviorSubject({} as IPublicPartition);
  publicItemSub$!: Subscription | undefined;

  personalItem: IPersonalItemsDetailsConfig | undefined;
  personalItem$ = new BehaviorSubject<IPersonalItemsDetailsConfig>({} as IPersonalItemsDetailsConfig);
  personalItemSub$!: Subscription | undefined;

  stateSub$!: Subscription | undefined;
  _state: AppDataStateModel = {} as AppDataStateModel;

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

  /*===========================================================================*/
  // These help track the responses
  /*===========================================================================*/
  currentDisputeSub$: Subscription | undefined;
  currentDispute$: BehaviorSubject<IDispute> = new BehaviorSubject<IDispute>({} as IDispute);
  currentDispute: IDispute = {} as IDispute;
  disputeStack = new Array<
    IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult
  >();

  _acknowledged: boolean = false;

  constructor(
    private statesvc: StateService,
    private analytics: AnalyticsService,
    private transunion: TransunionService,
    private safeMonitor: SafeListMonitoringService,
  ) {
    this.subscribeToTradeline();
    this.subscribeToPublicItems();
    this.subscribeToPersonalItems();
    this.subscribeToState();
    this.subscribeToCurrentDispute();
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }

  set state(value: AppDataStateModel) {
    this._state = value;
  }
  get state(): AppDataStateModel {
    return this._state;
  }

  subscribeToTradeline(): void {
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
  }

  subscribeToPublicItems(): void {
    this.publicItemSub$ = this.publicItem$.subscribe((publicItem) => {
      this.publicItem = publicItem;
    });
  }

  subscribeToPersonalItems(): void {
    this.personalItemSub$ = this.personalItem$.subscribe((personalItem) => {
      this.personalItem = personalItem;
    });
  }

  subscribeToState(): void {
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state.appData;
      this.acknowledged = state.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
    });
  }

  subscribeToCurrentDispute(): void {
    this.currentDisputeSub$ = this.currentDispute$.subscribe((dispute) => {
      this.currentDispute = dispute;
    });
  }

  ngOnDestroy(): void {
    if (this.tradelineSub$) this.tradelineSub$.unsubscribe();
    if (this.publicItemSub$) this.publicItemSub$.unsubscribe();
    if (this.personalItemSub$) this.personalItemSub$.unsubscribe();
    if (this.stateSub$) this.stateSub$.unsubscribe();
    if (this.currentDisputeSub$) this.currentDisputeSub$.unsubscribe();
  }

  getCurrentDispute(): IDispute {
    return this.currentDispute$.getValue();
  }

  getUserStateOfResidence(): string {
    return this.statesvc.state?.appData.user?.userAttributes?.address?.state || '';
  }

  setTradelineItem(tradeline: ITradeLinePartition): void {
    this.tradeline$.next(tradeline);
    const subscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline) || ({} as ISubscriber);
    this.tuTradelineSubscriber = subscriber;
    this.tuTradelineSubscriber$.next(subscriber);
  }

  setPublicItem(publicItem: IPublicPartition): void {
    this.publicItem$.next(publicItem);
    const subscriber = tu.queries.report.getPublicSubscriberByKey(publicItem) || ({} as ISubscriber);
    this.tuPublicItemSubscriber = subscriber;
    this.tuPublicItemSubscriber$.next(subscriber);
  }

  // cannot directly use the partition because of data structure.
  setPersonalItem(name: IPersonalItemsDetailsConfig): void {
    this.personalItem$.next(name);
  }

  pushDispute(
    item: IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult,
  ): void {
    this.disputeStack = [...this.disputeStack, item];
  }

  popDispute():
    | IProcessDisputeTradelineResult
    | IProcessDisputePublicResult
    | IProcessDisputePersonalResult
    | undefined {
    const item = this.disputeStack.pop();
    this.disputeStack = [...this.disputeStack];
    return item;
  }

  clearDisputes(): void {
    this.disputeStack = [];
  }

  /**
   * Update the users acknowledge and then gets dispute preflight check
   * @returns
   */
  async onUserConfirmed(): Promise<ITUServiceResponse<any>> {
    try {
      // acknowledge the user has read and accepted the terms
      // you have to acknowledge in order to get to this point
      await this.acknowledgeDisputeTerms(this.state);
      const preflight = await this.sendDisputePreflightCheck();
      if (preflight.success) {
        this.analytics.fireClickEvent(AnalyticClickEvents.DisputeEnrollment, {
          google: true,
          mixpanel: true,
          brave: true,
        });
        this.safeMonitor.fireClickEvent(MonitorClickEvents.DisputesEnroll);
      }
      return preflight;
    } catch (err) {
      throw `disputeService:onUserConfirmed=${err}`;
    }
  }
  /**
   * Updates the state and db to reflect the users acknowledgement
   * @param state
   */
  async acknowledgeDisputeTerms(state: AppDataStateModel): Promise<void> {
    const date = new Date().toISOString();
    const acknowledged = {
      ...state.agencies,
      transunion: {
        ...state.agencies?.transunion,
        acknowledgedDisputeTerms: true,
        acknowledgedDisputeTermsOn: date,
      },
    } as AgenciesStateModel;
    await this.statesvc.updateAgenciesAsync(acknowledged);
  }

  async sendDisputePreflightCheck(): Promise<ITUServiceResponse<any>> {
    return await this.transunion.sendDisputePreflightCheck();
  }

  /**
   * Initiate a new dispute. Cannot have one in progress.
   */
  async sendStartDispute(): Promise<ITUServiceResponse<any>> {
    return await this.transunion.sendStartDispute(this.disputeStack);
  }

  /**
   * Query the TU service for any investigation results by report id
   * @returns
   */
  async getInvestigationResultsById(id: string): Promise<ITUServiceResponse<string | undefined>> {
    return await this.transunion.getInvestigationResultsById(id);
  }

  /**
   * Query the TU service for any investigation results by report id
   * @returns
   */
  async getCreditBureauResultsById(id: string): Promise<ITUServiceResponse<string | undefined>> {
    return await this.transunion.getCreditBureauResultsById(id);
  }

  /**
   * Query to return all the users disputes
   * @returns
   */
  async getDisputesByUser(): Promise<ITUServiceResponse<IDispute[] | undefined>> {
    try {
      return await this.transunion.sendTransunionAPICall('ListDisputesByUser', JSON.stringify({}));
    } catch (err) {
      return {
        success: false,
        error: err as IErrorResponse,
        data: [],
      };
    }
  }
}
