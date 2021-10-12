import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
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
  tradelineSub$: Subscription;

  publicItem: IPublicPartition | undefined;
  publicItem$: BehaviorSubject<IPublicPartition> = new BehaviorSubject({} as IPublicPartition);
  publicItemSub$: Subscription;

  personalItem: IPersonalItemsDetailsConfig | undefined;
  personalItem$ = new BehaviorSubject<IPersonalItemsDetailsConfig>({} as IPersonalItemsDetailsConfig);
  personalItemSub$: Subscription;

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
  currentDispute$: BehaviorSubject<DisputeInput> = new BehaviorSubject<DisputeInput>({} as DisputeInput);
  disputeStack: (IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult)[] = [];
  disputes$: BehaviorSubject<(DisputeInput | null)[] | null | undefined> = new BehaviorSubject<
    (DisputeInput | null)[] | null | undefined
  >([{} as DisputeInput]);

  _acknowledged: boolean = false;
  stateSub$: Subscription;
  _state: AppDataStateModel = {} as AppDataStateModel;

  constructor(private store: Store, private statesvc: StateService, private transunion: TransunionService) {
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
    this.publicItemSub$ = this.publicItem$.subscribe((publicItem) => {
      this.publicItem = publicItem;
    });
    this.personalItemSub$ = this.personalItem$.subscribe((personalItem) => {
      this.personalItem = personalItem;
    });
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state.appData;
      this.disputes$.next(state.appData.agencies?.transunion?.disputes);
      this.acknowledged = state.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
    });
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

  ngOnDestroy(): void {
    if (this.tradelineSub$) this.tradelineSub$.unsubscribe();
    if (this.publicItemSub$) this.publicItemSub$.unsubscribe();
    if (this.personalItemSub$) this.personalItemSub$.unsubscribe();
    if (this.stateSub$) this.stateSub$.unsubscribe();
  }

  setTradelineItem(tradeline: ITradeLinePartition): void {
    this.tradeline$.next(tradeline);
    const subscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline) || ({} as ISubscriber);
    if (subscriber === undefined) return;
    this.tuTradelineSubscriber = subscriber;
    this.tuTradelineSubscriber$.next(subscriber);
  }

  setPublicItem(publicItem: IPublicPartition): void {
    this.publicItem$.next(publicItem);
    const subscriber = tu.queries.report.getPublicSubscriberByKey(publicItem) || ({} as ISubscriber);
    if (subscriber === undefined) return;
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
    if (!this.state) throw `tradelines:onConfirmed=Missing state`;
    try {
      // acknowledge the user has read and accepted the terms
      if (!this.acknowledged) await this.acknowledgeDisputeTerms(this.state);
      return await this.sendDisputePreflightCheck();
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
    try {
      return await this.transunion.sendDisputePreflightCheck();
    } catch (err) {
      throw `disputeService:sendDisputePreflightCheck=${err}`;
    }
  }

  /**
   * Initiate a new dispute. Cannot have one in progress.
   */
  async sendStartDispute(): Promise<ITUServiceResponse<any>> {
    try {
      return await this.transunion.sendStartDispute(this.disputeStack);
    } catch (err) {
      throw `disputeService:sendStartDispute=${err}`;
    }
  }

  /**
   * Query the TU service for any investigation results
   * @returns
   */
  async getInvestigationResults(disputeId: string): Promise<ITUServiceResponse<any>> {
    const data: AppDataStateModel = this.store.snapshot()?.appData;
    try {
      return await this.transunion.getInvestigationResults(disputeId);
    } catch (err) {
      throw `disputeService:getInvestigationResults=${err}`;
    }
  }
}
