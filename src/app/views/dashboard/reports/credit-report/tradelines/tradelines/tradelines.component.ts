import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';
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
    const accountType = TU.query.lookupTradelineTypeDescription(tradeline);
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `tradelines:onDisputeClicked=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((resp) => {
        const { success, error } = resp;
        console.log('preflightCheckReturn ===> ', resp);
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
