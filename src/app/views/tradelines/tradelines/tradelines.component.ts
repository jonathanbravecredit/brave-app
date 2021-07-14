import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
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
    const state = this.creditReportServices.getStateSnapshot()?.appData;
    if (!state) throw new Error(`Error in tradelines:onConfirmed=Missing state`);
    try {
      await this.enrollInDisputes(state);
      const data = await this.refreshCreditReports(state);
      const disputeStatus = await this.transunion.getDisputeStatus(data as AppDataStateModel);
      console.log('status back', disputeStatus);
      const disputeRaw = disputeStatus ? JSON.parse(disputeStatus) : undefined;
      const disputeResult = returnNestedObject(JSON.parse(disputeRaw.GetDisputeStatus), 'GetDisputeStatusResult');
      //if (disputeResult.ResponseType.toLowerCase() !== 'success') throw new Error('GetDisputeStatus filed');
      // TODO error in request...question out to Evadney for better guidance
      // assume it comes back successfully for now
      // TODO need to set the
      this.disputeService.setTradelineItem(card);
    } catch (err) {
      throw new Error(err);
    }
  }

  async enrollInDisputes(state: AppDataStateModel | UpdateAppDataInput): Promise<UpdateAppDataInput> {
    if (!state) throw new Error(`Error in tradelines:enrollInDisputes=Missing state`);
    try {
      const dispute = true;
      const resp = await this.transunion.sendEnrollRequest(state, dispute);
      const parsed = resp ? JSON.parse(resp) : undefined;
      if (!parsed || !parsed.Enroll) throw new Error('Failed to parse sendEnrollRequest response');
      const enrollResult = returnNestedObject(JSON.parse(parsed.Enroll), 'EnrollResult');
      const enriched = this.transunion.enrichEnrollmentData(state, enrollResult);
      if (!enriched || !enriched.agencies) throw 'Enrichment failed';
      const data = await this.statesvc.updateAgenciesAsync(enriched.agencies);
      if (!data) throw new Error('Failed to update state with refreshed report');
      return data;
    } catch (err) {
      throw new Error(`Error in tradelines:enrollInDisputes=${err}`);
    }
  }

  async refreshCreditReports(state: AppDataStateModel | UpdateAppDataInput): Promise<UpdateAppDataInput> {
    if (!state) throw new Error(`Error in tradelines:refreshCrediReports=Missing state`);
    try {
      const refresh = true;
      const resp = await this.transunion.getCreditReport(state, refresh);
      const parsed = resp ? JSON.parse(resp) : undefined;
      if (!parsed || !parsed.Fulfill) throw new Error('Failed to parse getCreditReport response');
      const fulfillResult = returnNestedObject(JSON.parse(parsed.Fulfill), 'FulfillResult');
      const enrich = this.transunion.enrichFulfillData(state, fulfillResult);
      if (!enrich?.agencies) throw 'Fulfill failed';
      const data = await this.creditReportServices.updateReportAsync(enrich.agencies);
      if (!data) throw new Error('Failed to update state with refreshed report');
      return data;
    } catch (err) {
      throw new Error(`Error in tradelines:enrollInDisputes=${err}`);
    }
  }
}
