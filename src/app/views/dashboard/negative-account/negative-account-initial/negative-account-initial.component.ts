import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { AccountService } from '@shared/services/account/account.service';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  report: IMergeReport | undefined;
  hasTradelines: boolean = false;

  constructor(private router: Router, private account: AccountService) {
    // this.hasTradelines = this.account.tradelines ? this.account.tradelines.length > 0 : false;
  }

  ngOnInit(): void {
    console.log('HERE', this.hasTradelines);
  }

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
