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
import { mockGetTrendingData } from "./mockChartData";
import { IResultsData } from "@shared/interfaces/common-ngx-charts.interface";

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
  creditScoreGraphData: IResultsData[] = [];

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private analytics: AnalyticsService,
    private dashboardService: DashboardService
  ) {
    this.route.data.subscribe((resp: any) => {
      this.report = resp.dashboard.report;
      this.snapshots = resp.dashboard.snapshots;
    });
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    const fullfilled = this.dashboardService.state?.agencies?.transunion
      ?.fulfilledOn;
    if (fullfilled) {
      this.lastUpdated = new Date(fullfilled).toLocaleDateString();
    }
  }

  ngOnInit(): void {
    if (this.userName) this.welcomeMsg = "Welcome back, " + this.userName;

    this.pages = [
      CreditReportGraphicComponent,
      CreditScoreHistoryNgxChartComponent,
    ];

    this.createChartCreditScoreData(mockGetTrendingData);

    this.data = [
      {
        currentValue: new ParseRiskScorePipe().transform(this.report),
      },
      {
        multi: this.creditScoreGraphData,
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

  createChartCreditScoreData(getTrendingData: IGetTrendingData) {
    let dataArray: IProductTrendingData[] | IProductTrendingData =
      getTrendingData.ProductAttributes.ProductTrendingAttribute
        .ProductAttributeData;
    let creditScoreDataObj: IResultsData = {
      name: "Credit Scores",
      series: [],
    };
    if (dataArray instanceof Array) {
      for (let productTrendingData of dataArray) {
        let object = {
          name: this.returnMonthAbreviation(
            +productTrendingData.AttributeDate.slice(5, 7)
          ),
          value: +productTrendingData.AttributeValue,
        };
        creditScoreDataObj.series.push(object);
      }
      if (creditScoreDataObj.series.length > 8) {
        creditScoreDataObj.series = creditScoreDataObj.series.splice(0, 8);
      }
    } else {
      let object = {
        name: this.returnMonthAbreviation(+dataArray.AttributeDate.slice(5, 7)),
        value: +dataArray.AttributeValue,
      };
      creditScoreDataObj.series.push(object);
    }
    this.creditScoreGraphData.push(creditScoreDataObj)
  }

  returnMonthAbreviation(monthNum: number): string {
    switch (monthNum) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      default:
        return "Dec";
    }
  }
}
