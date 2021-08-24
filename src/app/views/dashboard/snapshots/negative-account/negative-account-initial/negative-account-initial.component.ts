import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { Observable } from 'rxjs';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent {
  creditReport$: Observable<IMergeReport>;
  /**
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statesvc: StateService,
    private creditReportService: CreditreportService,
    private disputeService: DisputeService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
  async onConfirmed(tradeline: ITradeLinePartition): Promise<void> {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `negativeAccountInitial:onConfirmed=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate(['../../dispute'], {
            relativeTo: this.route,
            queryParams: {
              type: filter,
            },
          });
        } else {
          this.router.navigate(['../../error'], {
            relativeTo: this.route,
            queryParams: {
              code: error?.Code || '197',
            },
          });
        }
      })
      .catch((err) => {
        this.router.navigate(['../../error'], {
          relativeTo: this.route,
          queryParams: {
            code: '197',
          },
        });
      });
  }
}
