import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { IFulfillResponseSuccess } from '@shared/interfaces/fulfill.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { resolvePtr } from 'dns';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeService implements OnDestroy {
  tradeline: ITradeLinePartition | undefined;
  tradeline$: BehaviorSubject<ITradeLinePartition> = new BehaviorSubject({} as ITradeLinePartition);
  tradelineSub$: Subscription;
  disputeStack: IProcessDisputeTradelineResult[] = [];
  _acknowledged: boolean = false;
  stateSub$: Subscription;
  _state: AppDataStateModel = {} as AppDataStateModel;

  constructor(private store: Store, private statesvc: StateService, private transunion: TransunionService) {
    this.tradelineSub$ = this.tradeline$.subscribe((tradeline) => {
      this.tradeline = tradeline;
    });
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state.appData;
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
   * Update the users acknowledge if not already
   * Enroll the user in dispute subscription if not already
   * Refresh the report (TODO need to check if updated in the last 24 hours)
   * @returns
   */
  async onUserConfirmed(): Promise<void> {
    if (!this.state) throw `tradelines:onConfirmed=Missing state`;
    try {
      // acknowledge the user has read and accepted the terms
      if (!this.acknowledged) await this.acknowledgeDisputeTerms(this.state);
      if (!this.state.agencies?.transunion?.disputeEnrolled) await this.enrollInDisputes(this.state);
      await this.fulfillInDisputes(this.state); // errors handled in this method
      const updatedState = this.statesvc.state?.appData;
      console.log('updated state', JSON.stringify(updatedState));
      const disputeStatus = await this.transunion.getDisputeStatus(updatedState as AppDataStateModel);
      console.log('status back', disputeStatus);
      // report refreshed
      const disputeResponse = returnNestedObject(disputeStatus, 'ResponseType');
      console.log('status back', disputeResponse);
      const isValid = disputeResponse.toLowerCase() === 'success';
      if (!isValid) throw 'GetDisputeStatus failed';
      // can dispute go to dispute tradeline
      return;
    } catch (err) {
      throw new Error(err);
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

  /**
   * Enroll user in dispute subscription
   * @param state
   */
  async enrollInDisputes(state: AppDataStateModel | UpdateAppDataInput): Promise<void> {
    try {
      const resp = await this.transunion.sendEnrollRequest(state, true);
      console.log('resp in enrollInDispute ===> ', resp);
      if (!resp || !resp.Enroll) throw 'Failed to process sendEnrollRequest response';
      const response = returnNestedObject(resp, 'ResponseType')?.toLowerCase() === 'success';
      console.log('response in enrollInDispute ===> ', response);
      response
        ? await this.updateEnrollment(state)
        : (() => {
            throw 'Failed to enroll in disputes';
          })();
    } catch (err) {
      throw new Error(`Error in disputeService:enrollInDisputes=${err}`);
    }
  }

  /**
   * Update the state acknowledging the user has read and accepted the terms
   * @param state
   */
  async updateEnrollment(state: AppDataStateModel): Promise<void> {
    const date = new Date().toISOString();
    const enrolled = {
      ...state.agencies,
      transunion: {
        ...state.agencies?.transunion,
        disputeEnrolled: true,
        disputeEnrolledOn: date,
      },
    } as AgenciesStateModel;
    await this.statesvc.updateAgenciesAsync(enrolled);
  }

  /**
   * Call Fulfill request with correct report version and bundle
   * @param state
   * @returns
   */
  async fulfillInDisputes(state: AppDataStateModel | UpdateAppDataInput): Promise<void> {
    if (!state) throw `disputeService:fulfillInDisputes=Missing state`;
    try {
      const resp = await this.transunion.getCreditReport(state, true);
      console.log('resp in fulfillInDisputes ===> ', resp);
      if (!resp || !resp.Fulfill) throw 'Failed to parse getCreditReport response';
      const response = returnNestedObject(resp, 'ResponseType')?.toLowerCase() === 'success';
      console.log('response in fulfillInDisputes ===> ', response);
      response
        ? await this.updateFulfill(state, resp)
        : (() => {
            throw 'Failed to fulfill in disputes';
          })();
    } catch (err) {
      throw new Error(`Error in disputeService:fulfillInDisputes=${err}`);
    }
  }

  /**
   * Refresh the state and db with the updated fulfill reports
   * @param state
   * @param resp
   */
  async updateFulfill(state: AppDataStateModel, resp: IFulfillResponseSuccess) {
    const fulfillResult = returnNestedObject(resp, 'FulfillResult');
    const enriched = this.transunion.enrichFulfillData(state, fulfillResult);
    if (!enriched?.agencies) throw 'Fulfill failed';
    try {
      await this.statesvc.updateAgenciesAsync(enriched.agencies);
    } catch (err) {
      throw new Error(`Error in disputeService:updateFulfill=${err}`);
    }
  }

  /**
   * Call the start dispute request
   * @returns
   */
  async sendStartDispute(): Promise<string | undefined> {
    const state = this.store.snapshot()?.appData;
    try {
      return await this.transunion.sendStartDispute(state, this.disputeStack);
    } catch (err) {
      throw new Error(`Error in disputeService:sendStartDispute=${err}`);
    }
  }
}
