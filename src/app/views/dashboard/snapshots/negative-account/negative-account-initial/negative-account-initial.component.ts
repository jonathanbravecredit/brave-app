import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { Observable } from 'rxjs';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  creditReport$: Observable<IMergeReport>;
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

  ngOnInit(): void {}

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
  async onConfirmed(tradeline: ITradeLinePartition): Promise<void> {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    this.disputeService
      .sendDisputePreflightCheck()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate([routes.root.dashboard.disputes.reconfirm.full], {
            queryParams: {
              type: filter,
            },
          });
        } else {
          this.router.navigate([routes.root.dashboard.disputes.error.full], {
            queryParams: {
              code: error?.Code || '197',
            },
          });
        }
      })
      .catch((err) => {
        this.router.navigate([routes.root.dashboard.disputes.error.full], {
          queryParams: {
            code: '197',
          },
        });
      });
  }

  onGoToDashboardClick(): void {
    this.router.navigate([routes.root.dashboard.init.full]);
  }

  onGoToReportClick(): void {
    this.router.navigate([routes.root.dashboard.report.full]);
  }
}
