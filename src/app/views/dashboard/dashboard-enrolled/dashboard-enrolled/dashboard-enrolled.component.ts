import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { DashboardStateModel, DashboardStatus } from '@store/dashboard/dashboard.model';
import {
  IGetTrendingData,
  IProductTrendingAttribute,
  IProductTrendingData,
} from '@shared/interfaces/get-trending-data.interface';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { Observable, Subscription } from 'rxjs';
import { IAdData } from '@shared/interfaces/ads.interface';
import { shuffle } from 'lodash';

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
  sortedScores!: IProductTrendingData[] | null;
  trends!: IGetTrendingData | null;
  trendingScores: IProductTrendingData[] = [];
  creditMix: IRecommendationText | undefined;
  creditMixStatus: string | undefined;
  creditUtilizationStatus: string | undefined;
  tradelineSummary: ICreditMixTLSummary | undefined;
  rating: string | undefined;
  creditUtilizationPerc: number | undefined;
  routeSub$: Subscription | undefined;
  referral: IReferral | undefined;
  adsData$: Observable<IAdData[]> | undefined;
  adsData: IAdData[] | undefined;

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
    this.dashboardService.getAdData().then((resp: any) => {
      this.adsData = shuffle(resp);
    });
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
      this.trends = resp.dashboard.trends;
      if (this.trends) {
        const trendAttrs =
          this.trends.ProductAttributes.ProductTrendingAttribute instanceof Array
            ? this.trends.ProductAttributes.ProductTrendingAttribute
            : [this.trends.ProductAttributes.ProductTrendingAttribute];
        const scores = trendAttrs.filter(
          (a: IProductTrendingAttribute) => a.AttributeName.indexOf('TUCVantageScore3V7') >= 0,
        )[0];
        this.trendingScores =
          scores.ProductAttributeData.ProductTrendingData instanceof Array
            ? scores.ProductAttributeData.ProductTrendingData
            : [scores.ProductAttributeData.ProductTrendingData];
      }
      this.sortScores(this.trendingScores);
      this.referral = resp.dashboard.referral;
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

  sortScores(scores: IProductTrendingData[]) {
    this.sortedScores = scores.sort((a, b) => {
      return a.AttributeDate > b.AttributeDate ? -1 : 1;
    });
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.report.snapshot.negative.full]);
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.report.snapshot.forbearance.full]);
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate([routes.root.dashboard.report.snapshot.databreach.full]);
  }

  onFullReportClicked() {
    this.router.navigate([routes.root.dashboard.report.full]);
  }

  onDisputesClicked() {
    this.router.navigate([routes.root.dashboard.disputes.full]);
  }

  onCreditUtilizationClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.creditutilization.full]);
  }

  onCreditMixClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.creditmix.full]);
  }

  onReferralsClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.referrals.full]);
  }
}
