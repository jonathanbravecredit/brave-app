import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { Observable } from 'rxjs';

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
  async onConfirmed(card: INegativeAccountCardInputs): Promise<void> {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `negativeAccountInitial:onConfirmed=Missing id:${id}`;
    this.disputeService
      .sendDisputePreflightCheck(id)
      .then((resp) => {
        const { success, error } = resp;
        console.log('preflightCheckReturn ===> ', resp);
        if (success) {
          this.router.navigate(['/dashboard/disputes'], { relativeTo: this.route });
        } else {
          this.router.navigate(['/dashboard/error'], {
            relativeTo: this.route,
            queryParams: {
              code: error?.Code || '197',
            },
          });
        }
      })
      .catch((err) => {
        this.router.navigate(['/dashboard/error'], {
          relativeTo: this.route,
          queryParams: {
            code: '197',
          },
        });
      });
  }
}
