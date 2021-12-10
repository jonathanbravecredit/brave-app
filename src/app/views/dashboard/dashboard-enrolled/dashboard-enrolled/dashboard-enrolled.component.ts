import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { DashboardStateModel, DashboardStatus } from '@store/dashboard/dashboard.model';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnInit {
  userName: string | undefined;
  welcomeMsg: string | undefined;
  lastUpdated: string | undefined;
  report: IMergeReport | undefined;
  snapshots: DashboardStateModel | undefined;
  scores!: ICreditScoreTracking | null;
  trends!: IGetTrendingData | null;
  metrics!: IGroupedYearMonthReferral[] | null;
  tradelineSummary: ICreditMixTLSummary | undefined;
  recommendation: IRecommendationText | undefined;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private analytics: AnalyticsService,
    private dashboardService: DashboardService,
    private creditMixService: CreditMixService,
  ) {
    this.route.data.subscribe((resp: any) => {
      this.report = resp.dashboard.report;
      this.snapshots = resp.dashboard.snapshots;
      this.scores = resp.dashboard.scores || null;
      this.trends = resp.dashboard.trends;
      this.metrics = resp.dashboard.referrals;
      if (this.report?.TrueLinkCreditReportType.TradeLinePartition) {
        this.tradelineSummary = this.creditMixService.getTradelineSummary(
          this.report?.TrueLinkCreditReportType.TradeLinePartition instanceof Array
            ? this.report?.TrueLinkCreditReportType.TradeLinePartition
            : [this.report?.TrueLinkCreditReportType.TradeLinePartition],
        );
      }
      this.recommendation = this.creditMixService.getRecommendations(this.tradelineSummary);
    });
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    const fullfilled = this.dashboardService.state?.agencies?.transunion?.fulfilledOn;
    if (fullfilled) {
      this.lastUpdated = new Date(fullfilled).toLocaleDateString();
    }
  }

  ngOnInit(): void {
    if (this.userName) this.welcomeMsg = 'Welcome back, ' + this.userName;
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.router.navigate(['../report/snapshot/negative'], {
      relativeTo: this.route,
    });
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.router.navigate(['../report/snapshot/forbearance'], {
      relativeTo: this.route,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate(['../report/snapshot/databreach'], {
      relativeTo: this.route,
    });
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate(['../report/snapshot/databreach'], {
      relativeTo: this.route,
    });
  }

  onFullReportClicked() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }

  onDisputesClicked() {
    this.router.navigate(['../disputes'], { relativeTo: this.route });
  }

  onCreditUtilizationClicked() {
    this.router.navigate(['../report/snapshot/creditutilization'], {
      relativeTo: this.route,
    });
  }

  onCreditMixClicked() {
    this.router.navigate(['../report/snapshot/creditmix'], {
      relativeTo: this.route,
    });
  }

  onReferralsClicked() {
    this.router.navigate(['../report/snapshot/referrals'], {
      relativeTo: this.route,
    });
  }
}
