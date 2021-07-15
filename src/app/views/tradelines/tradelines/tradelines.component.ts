import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-tradelines',
  templateUrl: './tradelines.component.html',
})
export class TradelinesComponent {
  /**
   * Raw tradline partition directly from Merge Report
   */
  tradeline$: Observable<ITradeLinePartition>;
  /**
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;

  /**
   * Initializes tradeline property with current tradeline from CreditReportService
   * @constructor
   * @param creditReportServices
   */
  constructor(
    private router: Router,
    private statesvc: StateService,
    private transunion: TransunionService,
    private disputeService: DisputeService,
    private creditReportServices: CreditreportService,
  ) {
    this.tradeline$ = this.creditReportServices.tuTradeline$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
    console.log('acknowledged', this.acknowledged);
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }
  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeClicked(tradeline: ITradeLinePartition): void {
    this.onConfirmed(tradeline)
      .then((_) => {
        this.disputeService.setTradelineItem(tradeline);
        this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
      })
      .catch((err) => {
        throw new Error(`Error in tradelines:onDisputeClicked=${err}`);
      });
  }

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
  async onConfirmed(card: ITradeLinePartition): Promise<void> {
    const state = this.statesvc.state?.appData;
    if (!state) throw `tradelines:onConfirmed=Missing state`;
    try {
      // acknowledge the user has read and accepted the terms
      if (!this.acknowledged) await this.updateAcknowledgement(state);
      if (!state.agencies?.transunion?.disputeEnrolled) await this.enrollInDisputes(state);
      const data = await this.refreshCreditReports(state); // errors handled in this method
      const disputeStatus = await this.transunion.getDisputeStatus(data as AppDataStateModel);
      console.log('status back', disputeStatus);
      // report refreshed
      const disputeResponse = returnNestedObject(disputeStatus, 'ResponseType');
      const isValid = disputeResponse.toLowerCase() === 'success';
      if (!isValid) throw 'GetDisputeStatus failed';
      // can dispute go to dispute tradeline
      return;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Enroll user in dispute subscription
   * @param state
   */
  async enrollInDisputes(state: AppDataStateModel | UpdateAppDataInput): Promise<void> {
    if (!state) throw `tradelines:enrollInDisputes=Missing state`;
    try {
      const dispute = true;
      const resp = await this.transunion.sendEnrollRequest(state, dispute);
      console.log('enroll resp', resp);
      if (!resp || !resp.Enroll) throw 'Failed to process sendEnrollRequest response';
      const response = returnNestedObject(resp, 'ResponseType')?.toLowerCase() === 'success';
      response
        ? await this.enrollInDisputes(state)
        : (() => {
            throw 'Failed to enroll in disputes';
          })();
    } catch (err) {
      throw new Error(`Error in tradelines:enrollInDisputes=${err}`);
    }
  }
  /**
   * Call Fulfill request with correct report version and bundle
   * @param state
   * @returns
   */
  async refreshCreditReports(state: AppDataStateModel | UpdateAppDataInput): Promise<UpdateAppDataInput> {
    if (!state) throw `tradelines:refreshCrediReports=Missing state`;
    try {
      const refresh = true;
      const resp = await this.transunion.getCreditReport(state, refresh);
      if (!resp || !resp.Fulfill) throw 'Failed to parse getCreditReport response';
      const fulfillResult = returnNestedObject(resp, 'FulfillResult');
      const enrich = this.transunion.enrichFulfillData(state, fulfillResult);
      if (!enrich?.agencies) throw 'Fulfill failed';
      const data = await this.creditReportServices.updateReportAsync(enrich.agencies);
      if (!data) throw 'Failed to update state with refreshed report';
      return data;
    } catch (err) {
      throw new Error(`Error in tradelines:enrollInDisputes=${err}`);
    }
  }

  /**
   * Update the state acknowledging the user has read and accepted the terms
   * @param state
   */
  async updateAcknowledgement(state: AppDataStateModel): Promise<void> {
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
}
