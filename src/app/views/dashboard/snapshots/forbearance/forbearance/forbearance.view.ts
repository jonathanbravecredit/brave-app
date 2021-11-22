import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';

@Component({
  selector: 'brave-forbearance',
  templateUrl: './forbearance.view.html',
})
export class ForbearanceView implements OnInit {
  creditReport$: Observable<IMergeReport>;
  accountTypes = AccountTypes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private creditReportService: CreditreportService,
    private analytics: AnalyticsService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotForbearance);
  }

  /**
   * When the view detail button is clicked set the tradeline to the one clicked
   * and navigate to the detail view
   * @param tradeline
   */
  onViewDetailClick(tradeline: ITradeLinePartition): void {
    this.creditReportService.setTradeline(tradeline);
    this.router.navigate(['../../../report/tradeline'], { relativeTo: this.route });
  }

  onInfoClick(): void {
    window.open('https://www.brave.credit/forbearance-blog', '_blank');
  }
}
