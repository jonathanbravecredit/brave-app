import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import {
  DashboardStateModel,
  DashboardStatus,
} from "@store/dashboard/dashboard.model";
import {
  IGetTrendingData,
  IProductTrendingData,
} from "@shared/interfaces/get-trending-data.interface";
import { CreditMixService } from "@views/dashboard/credit-mix/credit-mix-service/credit-mix-service.service";
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from "@views/dashboard/credit-mix/interfaces/credit-mix-calc-obj.interface";
import { IReferral } from "@shared/interfaces/referrals.interface";
import { CreditUtilizationService } from "@shared/services/credit-utilization/credit-utilization.service";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { Observable, Subscription } from "rxjs";
import { IAdData } from "@shared/interfaces/ads.interface";
import { shuffle } from "lodash";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { IMergeReport } from "@shared/interfaces";
import { Store } from "@ngxs/store";
import {
  CreditReportSelectors,
  CreditReportStateModel,
} from "@store/credit-report";
import { filter } from "rxjs/operators";
import { Initiative } from "@shared/interfaces/progress-tracker.interface";
import { ProgressTrackerService } from "@shared/services/progress-tracker/progress-tracker-service.service";
import { ICircleProgressStep } from "@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar";
import { IUpdatesMetrics } from "../../../../shared/interfaces/dashboard.interface";

@Component({
  selector: "brave-dashboard-enrolled",
  templateUrl: "./dashboard-enrolled.component.html",
})
export class DashboardEnrolledComponent implements OnDestroy {
  // is credit report suppressed
  suppressed: boolean = false;
  // snapshots and analysis
  snapshots: DashboardStateModel | undefined;
  rating: string | undefined;
  creditMix: IRecommendationText | undefined;
  creditMixStatus: string | undefined;
  creditUtilizationStatus: string | undefined;
  creditUtilizationPerc: number | undefined;
  creditMixSummary: ICreditMixTLSummary | undefined;
  updatesMetrics: IUpdatesMetrics | undefined;
  // tu data
  // report: IMergeReport | undefined;
  referral: IReferral | null | undefined;
  trends!: IGetTrendingData | null;
  trendingScores: IProductTrendingData[] = [];
  sortedScores!: IProductTrendingData[] | null;
  // ad data for carousel
  adsData$: Observable<IAdData[]> | undefined;
  adsData: IAdData[] | undefined;
  // sub to router
  routeSub$: Subscription | undefined;
  report: IMergeReport | null = null;

  report$: Observable<CreditReportStateModel> = this.store.select(
    CreditReportSelectors.getCreditReport
  );
  reportSub$: Subscription | undefined;

  initiative: Initiative | null = null;
  initiative$: Subscription | undefined;

  enrolledScore: string | undefined = this.store?.selectSnapshot(
    (state) => state?.appData
  )?.agencies?.transunion?.enrollVantageScore?.serviceProductValue;
  // private initiativeSub$: Subscription | undefined;
  initiativeSteps: ICircleProgressStep[] = [];
  futureScore: number = 0;

  constructor(
    private store: Store,
    private router: Router,
    private creditMixService: CreditMixService,
    private creditUtilizationService: CreditUtilizationService,
    public dashboardService: DashboardService,
    public progressTracker: ProgressTrackerService
  ) {
    this.subscribeToReportData();
    this.initiative$ = progressTracker.initiative$?.subscribe((v) => {
      this.initiative = v.data;
      this.refreshFutureScore();
    });
    this.setProgressTrackerDataInDashboardService();
    this.setAdData();
    this.setUpdateMetrics();
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
    this.reportSub$?.unsubscribe();
    this.initiative$?.unsubscribe();
  }

  refreshFutureScore() {
    this.futureScore =
      (this.progressTracker.findFutureScore() || 0) +
      +(this.enrolledScore || 0);
  }

  subscribeToReportData(): void {
    this.reportSub$ = this.report$
      ?.pipe(filter((report) => report !== undefined))
      ?.subscribe((creditReport: CreditReportStateModel) => {
        this.report = creditReport.report;
        if (this.report) {
          this.dashboardService.updatedOn$.next(creditReport.modifiedOn);
          this.dashboardService.dashReport$.next(this.report);
          this.dashboardService.dashScoreSuppressed$.next(
            TransunionUtil.queries.report.isReportSupressed(this.report)
          );
          const tradelines = TransunionUtil.queries.report.listTradelines(
            this.report
          );
          this.creditMixSummary =
            this.creditMixService.getTradelineSummary(tradelines);
          this.creditMix = this.creditMixService.getRecommendations(
            this.creditMixSummary
          );
          this.creditMixStatus =
            this.creditMixService.mapCreditMixSnapshotStatus(
              this.creditMix?.rating || "fair"
            );
          this.rating = this.creditMixService.getRecommendations(
            this.creditMixSummary
          )?.rating;
          // for the credit utilization
          const creditUtilSnapshotObj =
            this.creditUtilizationService.getCreditUtilizationSnapshotStatus(
              tradelines
            );
          this.creditUtilizationStatus = creditUtilSnapshotObj.status;
          this.creditUtilizationPerc = creditUtilSnapshotObj.perc;
        }
      });
  }

  setProgressTrackerDataInDashboardService() {
    if (this.initiative) {
      this.dashboardService.progressTrackerData$.next(this.initiative);
    }
  }

  async setUpdateMetrics() {
    this.updatesMetrics = await this.dashboardService.getUpdateMetrics();
  }

  setAdData(): void {
    this.dashboardService.getAdData()?.then((resp: any) => {
      this.adsData = shuffle(resp);
    });
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.negativeaccounts.full]);
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.forbearance.full]);
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate([routes.root.dashboard.databreach.full]);
  }

  onFullReportClicked() {
    this.router.navigate([routes.root.dashboard.report.full]);
  }

  onDisputesClicked() {
    this.router.navigate([routes.root.dashboard.disputes.full]);
  }

  onCreditUtilizationClicked() {
    this.router.navigate([routes.root.dashboard.creditutilization.full]);
  }

  onCreditMixClicked() {
    this.router.navigate([routes.root.dashboard.creditmix.full]);
  }

  onReferralsClicked() {
    this.router.navigate([routes.root.dashboard.referrals.full]);
  }

  onProgressTrackerClicked() {
    this.router.navigate([routes.root.dashboard.progresstracker.full]);
  }
}
