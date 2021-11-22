import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticErrorEvents } from '@shared/services/analytics/analytics/constants';

@Component({
  selector: 'brave-kyc-exceptions',
  templateUrl: './kyc-exceptions.view.html',
})
export class KycExceptionsView implements OnInit {
  defaultCode = '11'; // general app errod
  constructor(private router: Router, readonly route: ActivatedRoute, private analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.analytics.fireErrorEvent(AnalyticErrorEvents.ApiTechnicalIssue);
  }

  onActionButtonClicked(route: string): void {
    // Remove query params
    this.router.navigate([`${route}`], {
      queryParams: {
        code: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
