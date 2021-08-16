import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
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
   * Raw report needed for Borrower
   */
  tuReport$: Observable<IMergeReport>;
  /**
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;
  /**
   * Credit statement from Merge Report
   */
  customerStatement: string = '';

  /**
   * Initializes tradeline property with current tradeline from CreditReportService
   * @constructor
   * @param creditReportServices
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statesvc: StateService,
    private disputeService: DisputeService,
    private interstitial: InterstitialService,
    private creditReportServices: CreditreportService,
  ) {
    this.tradeline$ = this.creditReportServices.tuTradeline$.asObservable();
    this.tuReport$ = this.creditReportServices.tuReport$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
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
    const accountType = tu.query.lookupTradelineTypeDescription(tradeline);
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `tradelines:onDisputeClicked=Missing id:${id}`;
    this.interstitial.changeMessage('checking eligibility');
    this.interstitial.openInterstitial();
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate(['../dispute'], {
            relativeTo: this.route,
            queryParams: {
              type: filter,
            },
          });
        } else {
          this.router.navigate(['../error'], {
            relativeTo: this.route,
            queryParams: {
              code: error?.Code || '197',
            },
          });
        }
      })
      .catch((err) => {
        this.router.navigate(['../error'], {
          relativeTo: this.route,
          queryParams: {
            code: '197',
          },
        });
      });
  }
}
