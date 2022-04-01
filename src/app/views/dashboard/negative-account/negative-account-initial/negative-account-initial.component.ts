import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  report: IMergeReport | undefined;

  constructor(private router: Router) {
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
