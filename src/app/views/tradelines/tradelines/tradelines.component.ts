import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { dateDiffInDays } from '@shared/utils/dates';
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
  async onDisputeClicked(tradeline: ITradeLinePartition): Promise<void> {
    try {
      this.acknowledged
        ? await this.processAcknowledgedUser(tradeline)
        : await this.processUnacknowledgedUser(tradeline);
    } catch (err) {
      throw new Error(`Error in tradelines:onDisputeClicked=${err}`);
    }
  }

  /**
   * If the user is already acknowledged determine if refresh is needed before
   *   navigating to dispute
   * @param tradeline
   */
  async processAcknowledgedUser(tradeline: ITradeLinePartition): Promise<void> {
    const state = this.statesvc.state?.appData;
    if (!state) throw 'Missing state';
    // use the dispute fulfull for refreshes NOT CreditReport fulfill
    if (this.isRefreshRequired(state)) this.disputeService.fulfillInDisputes(state);
    this.disputeService.setTradelineItem(tradeline);
    this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
  }

  /**
   * If the user hs not already acknowledged they need to acknowledge before
   *  enrolling and refreshing report
   * @param tradeline
   */
  async processUnacknowledgedUser(tradeline: ITradeLinePartition): Promise<void> {
    this.disputeService
      .onUserConfirmed()
      .then((_) => {
        this.disputeService.setTradelineItem(tradeline);
        this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
      })
      .catch((err) => {
        throw new Error(`Error in tradelines:onDisputeClicked=${err}`);
      });
  }

  /**
   * Determine if the last time the user refreshed was more than 24hrs ago
   * @param state
   * @returns
   */
  isRefreshRequired(state: AppDataStateModel): boolean {
    const fulfilledOn = state.agencies?.transunion?.fulfilledOn;
    if (!fulfilledOn) return true;
    const now = new Date();
    const last = new Date(fulfilledOn);
    return dateDiffInDays(last, now) > 0 ? true : false;
  }
}
