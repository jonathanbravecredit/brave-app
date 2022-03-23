import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { StateService } from '@shared/services/state/state.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { AccountService } from '@shared/services/account/account.service';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  report: IMergeReport | undefined;

  constructor(
    private router: Router,
    public account: AccountService,
  ) {
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
