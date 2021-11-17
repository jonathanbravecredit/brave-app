import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CreditScoreHistoryNgxChartComponent } from "@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component";
import { CreditReportGraphicComponent } from "@shared/components/graphics/credit-report-graphic/credit-report-graphic.component";
import { IMergeReport } from "@shared/interfaces";
import { ParseRiskScorePipe } from "@shared/pipes/parse-risk-score/parse-risk-score.pipe";
import { DashboardStateModel } from "@store/dashboard/dashboard.model";
import { dashboardEnrolledContent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content";

@Component({
  selector: "brave-dashboard-enrolled-pure",
  templateUrl: "./dashboard-enrolled-pure.component.html",
})
export class DashboardEnrolledPureComponent implements OnInit {
  @Input() report: IMergeReport | undefined;
  @Input() cards: DashboardStateModel | undefined;
  @Input() welcomeMsg: string | undefined = dashboardEnrolledContent.defaultMsg;
  @Input() lastUpdated: number | string | Date | undefined;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  @Output() disputesClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditUtilizationClicked: EventEmitter<void> = new EventEmitter();
  content = dashboardEnrolledContent;
  forbearanceClicked: boolean = false;
  showDisclaimer: boolean = false;
  constructor() {}
  pages: any[] = [];
  data: {}[] = [];

  ngOnInit(): void {
    this.pages = [
      CreditReportGraphicComponent,
      CreditScoreHistoryNgxChartComponent,
    ];

    this.data = [
      {
        currentValue: new ParseRiskScorePipe().transform(this.report),
      },
      {
        multi: [
          {
            name: "CreditScore",
            series: [
              {
                name: "Jan",
                value: 350,
              },
              {
                name: "Feb",
                value: 450,
              },
              {
                name: "Mar",
                value: 500,
              },
              {
                name: "Apr",
                value: 600,
              },
              {
                name: "May",
                value: 680,
              },
              {
                name: "Jun",
                value: 720,
              },
            ],
          },
        ],
        view: [300, 140]
      },
    ];
  }

  get score(): number | undefined {
    const creditScore = this.report?.TrueLinkCreditReportType?.Borrower
      ?.CreditScore;
    if (creditScore instanceof Array) {
      const score = creditScore.find((value) => {
        return value.scoreName.toLowerCase() === "vantagescore3";
      });
      const _score = Math.round(score?.riskScore as number);
      if (isNaN(_score)) return;
      return _score;
    } else {
      const score = creditScore?.riskScore;
      const _score = Math.round(score as number);
      if (isNaN(_score)) return;
      return _score;
    }
  }
}
