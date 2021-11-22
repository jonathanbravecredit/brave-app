import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngxs/store";
import { IMergeReport } from "@shared/interfaces";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import {
  DashboardStateModel,
  DashboardStatus,
} from "@store/dashboard/dashboard.model";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { AnalyticClickEvents } from "@shared/services/analytics/analytics/constants";
import { CreditReportGraphicComponent } from "@shared/components/graphics/credit-report-graphic/credit-report-graphic.component";
import { CreditScoreHistoryNgxChartComponent } from "@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component";
import { ParseRiskScorePipe } from "@shared/pipes/parse-risk-score/parse-risk-score.pipe";
import {
  IGetTrendingData,
  IProductTrendingData,
} from "@shared/interfaces/get-trending-data.interface";
import { IResultsData } from "@shared/interfaces/common-ngx-charts.interface";
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { CreditScoreHistoryNgxChartService } from "@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.service";

@Component({
  selector: "brave-dashboard-enrolled",
  templateUrl: "./dashboard-enrolled.component.html",
})
export class DashboardEnrolledComponent implements OnInit {
  userName: string | undefined;
  welcomeMsg: string | undefined;
  lastUpdated: number | string | Date | undefined;
  report: IMergeReport | undefined;
  snapshots: DashboardStateModel | undefined;
  pages: any[] = [];
  data: {}[] = [];
  scores!: ICreditScoreTracking | null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private analytics: AnalyticsService,
    private dashboardService: DashboardService,
    private creditScoreNgxChartService: CreditScoreHistoryNgxChartService
  ) {
    this.route.data.subscribe((resp: any) => {
      this.report = resp.dashboard.report;
      this.snapshots = resp.dashboard.snapshots;
      this.scores = resp.dashboard.scores || null;
    });
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    const fullfilled = this.dashboardService.state?.agencies?.transunion
      ?.fulfilledOn;
    if (fullfilled) {
      this.lastUpdated = new Date(fullfilled).toLocaleDateString();
    }
  }

  async ngOnInit(): Promise<void> {
    if (this.userName) this.welcomeMsg = "Welcome back, " + this.userName;

    // debugger

    this.pages = [
      CreditReportGraphicComponent,
      CreditScoreHistoryNgxChartComponent,
    ];

    const dataProductAttributes = await this.creditScoreNgxChartService.getTrendingData()

    console.log('Trending DATA ====>>>>>>>' , dataProductAttributes)

    const chartData = this.creditScoreNgxChartService.createChartCreditScoreData({ProductAttributes: dataProductAttributes})

    console.log('Chart DATA ====>>>>>>>' , chartData)

    this.data = [
      {
        currentValue: new ParseRiskScorePipe().transform(this.report),
      },
      {
        multi: chartData,
        view: [300, 140],
      },
    ];
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.analytics.fireClickEvent(
      AnalyticClickEvents.SnapshotNegativeItemsModule
    );
    this.router.navigate(["../report/snapshot/negative"], {
      relativeTo: this.route,
    });
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.analytics.fireClickEvent(
      AnalyticClickEvents.SnapshotForbearanceModule
    );
    this.router.navigate(["../report/snapshot/forbearance"], {
      relativeTo: this.route,
    });
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.analytics.fireClickEvent(AnalyticClickEvents.SnapshotFraudModule);
    this.router.navigate(["../report/snapshot/databreach"], {
      relativeTo: this.route,
    });
  }

  onFullReportClicked() {
    this.router.navigate(["../report"], { relativeTo: this.route });
  }

  onDisputesClicked() {
    this.router.navigate(["../disputes"], { relativeTo: this.route });
  }

  onCreditUtilizationClicked() {
    this.router.navigate(["../report/snapshot/creditutilization"], {
      relativeTo: this.route,
    });
  }


}
