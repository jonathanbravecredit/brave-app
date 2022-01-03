import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { DashboardStateModel, DashboardStatus } from '@store/dashboard/dashboard.model';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnInit, OnDestroy {
  userName: string | undefined;
  welcomeMsg: string | undefined;
  lastUpdated: string | undefined;
  report: IMergeReport | undefined;
  snapshots: DashboardStateModel | undefined;
  scores!: ICreditScoreTracking | null;
  trends!: IGetTrendingData | null;
  metrics!: IGroupedYearMonthReferral[] | null;
  creditMix: IRecommendationText | undefined;
  creditMixStatus: string | undefined;
  creditUtilizationStatus: string | undefined;
  tradelineSummary: ICreditMixTLSummary | undefined;
  rating: string | undefined;
  creditUtilizationPerc: number | undefined;
  routeSub$: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private creditMixService: CreditMixService,
    private creditUtilizationService: CreditUtilizationService,
  ) {
    this.subscribeToRouteData();
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    const fullfilled = this.dashboardService.state?.agencies?.transunion?.fulfilledOn;
    if (fullfilled) {
      this.lastUpdated = new Date(fullfilled).toLocaleDateString();
    }
  }

  ngOnInit(): void {
    if (this.userName) this.welcomeMsg = 'Welcome back, ' + this.userName;
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  subscribeToRouteData(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      this.report = resp.dashboard.report;
      this.snapshots = resp.dashboard.snapshots;
      this.scores = resp.dashboard.scores || null;
      this.trends = resp.dashboard.trends;
      this.metrics = resp.dashboard.referrals;
      const tradelines = this.report?.TrueLinkCreditReportType?.TradeLinePartition
        ? this.report?.TrueLinkCreditReportType.TradeLinePartition instanceof Array
          ? this.report?.TrueLinkCreditReportType.TradeLinePartition
          : [this.report?.TrueLinkCreditReportType.TradeLinePartition]
        : [];

      this.tradelineSummary = this.creditMixService.getTradelineSummary(tradelines);
      this.creditMix = this.creditMixService.getRecommendations(this.tradelineSummary);
      this.creditMixStatus = this.creditMixService.mapCreditMixSnapshotStatus(this.creditMix?.rating || 'fair');
      this.rating = this.creditMixService.getRecommendations(this.tradelineSummary)?.rating;
      const creditUtilSnapshotObj = this.creditUtilizationService.getCreditUtilizationSnapshotStatus(tradelines);
      this.creditUtilizationStatus = creditUtilSnapshotObj.status;
      this.creditUtilizationPerc = creditUtilSnapshotObj.perc;
    });
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.children.dashboard.children.report.children.snapshot.children.negative.full]);
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.children.dashboard.children.report.children.snapshot.children.forbearance.full]);
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate([routes.root.children.dashboard.children.report.children.snapshot.children.databreach.full]);
  }

  onFullReportClicked() {
    this.router.navigate([routes.root.children.dashboard.children.report.full]);
  }

  onDisputesClicked() {
    this.router.navigate([routes.root.children.dashboard.children.disputes.full]);
  }

  onCreditUtilizationClicked() {
    this.router.navigate([
      routes.root.children.dashboard.children.report.children.snapshot.children.creditutilization.full,
    ]);
  }

  onCreditMixClicked() {
    this.router.navigate([routes.root.children.dashboard.children.report.children.snapshot.children.creditmix.full]);
  }

  onReferralsClicked() {
    this.router.navigate([routes.root.children.dashboard.children.report.children.snapshot.children.referrals.full]);
  }
}
