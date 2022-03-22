import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { Observable } from 'rxjs';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { NegativeAccountService } from '@views/dashboard/negative-account/negative-account-service/negative-account-service.service';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  creditReport$: Observable<IMergeReport>;
  _acknowledged: boolean = false;

  constructor(
    private router: Router,
    private statesvc: StateService,
    private creditReportService: CreditreportService,
    public negAccService: NegativeAccountService
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

  onGoToDashboardClick(): void {
    this.router.navigate([routes.root.dashboard.init.full]);
  }

  onGoToReportClick(): void {
    this.router.navigate([routes.root.dashboard.report.full]);
  }
}
