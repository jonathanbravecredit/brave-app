import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-forbearance',
  templateUrl: './forbearance.view.html',
})
export class ForbearanceView implements OnInit {
  creditReport$: Observable<IMergeReport>;
  accountTypes = AccountTypes;

  constructor(private router: Router, private creditReportService: CreditreportService) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {}

  /**
   * When the view detail button is clicked set the tradeline to the one clicked
   * and navigate to the detail view
   * @param tradeline
   */
  onViewDetailClick(tradeline: ITradeLinePartition): void {
    this.creditReportService.setTradeline(tradeline);
    this.router.navigate([routes.root.children.dashboard.children.report.children.tradeline.full]);
  }

  onInfoClick(): void {
    window.open('https://www.brave.credit/forbearance-blog', '_blank');
  }
}
