import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
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
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `tradelines:onDisputeClicked=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((eligible) => {
        console.log('preflightCheckReturn ===> ', eligible);
        if (eligible) {
          this.disputeService.setTradelineItem(tradeline);
          this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
        } else {
          // TODO replace with better view to tell them they are ineligible
          this.router.navigate(['/dashboard/report/detail/dispute/error']);
        }
      })
      .catch((err) => {
        this.router.navigate(['/dashboard/report/detail/dispute/error']);
      });
  }
}
