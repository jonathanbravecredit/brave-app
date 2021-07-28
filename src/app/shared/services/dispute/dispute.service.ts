import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeService extends InterstitialService implements OnDestroy {
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$: Subscription;
  disputeStack: IProcessDisputeTradelineResult[] = [];
  _acknowledged: boolean = false;
  stateSub$: Subscription;
  _state: AppDataStateModel = {} as AppDataStateModel;
  disputes$: Subject<(DisputeInput | null | undefined)[] | null | undefined> = new Subject();
  currentDispute$: BehaviorSubject<DisputeInput> = new BehaviorSubject({} as DisputeInput);

  constructor(private store: Store, private statesvc: StateService, private transunion: TransunionService) {
    super();
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state.appData;
      const disputes = state.appData.agencies?.transunion?.disputes;
      console.log('disputes ===> ', disputes);
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
    if (this.stateSub$) this.stateSub$.unsubscribe();
  }

  setTradelineItem(tradeline: ITradeLinePartition): void {
    this.tradeline$.next(tradeline);
  }

  pushDispute(item: IProcessDisputeTradelineResult): void {
    this.disputeStack = [...this.disputeStack, item];
  }

  popDispute(): IProcessDisputeTradelineResult | undefined {
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
      return await this.sendDisputePreflightCheck(this.state.id);
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

  async sendDisputePreflightCheck(id: string): Promise<ITUServiceResponse<any>> {
    try {
      return await this.transunion.sendDisputePreflightCheck({ id });
    } catch (err) {
      throw `disputeService:sendDisputePreflightCheck=${err}`;
    }
  }

  /**
   * Initiate a new dispute. Cannot have one in progress.
   */
  async sendStartDispute(): Promise<ITUServiceResponse<any>> {
    const data: AppDataStateModel = this.store.snapshot()?.appData;
    try {
      return await this.transunion.sendStartDispute(data.id, this.disputeStack);
    } catch (err) {
      throw `disputeService:sendStartDispute=${err}`;
    }
  }
}
