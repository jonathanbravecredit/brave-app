import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';

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
    private google: GoogleService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtEvts.DashboardReportSnapshotForbearance);
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
