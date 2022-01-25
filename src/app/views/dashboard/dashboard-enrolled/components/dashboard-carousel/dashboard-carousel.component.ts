import { Component, Input, OnInit } from '@angular/core';
import { ICreditScoreHistoryNgxChartInputs } from '@shared/components/charts/credit-score-history-ngx-chart';
import { CreditScoreHistoryNgxChartComponent } from '@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { ICreditReportGraphic } from '@shared/components/graphics/credit-report-graphic';
import { CreditReportGraphicComponent } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.component';
import { IMergeReport } from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { TESTERTRENDING } from '@views/dashboard/dashboard-enrolled/components/dashboard-carousel/testerData';

@Component({
  selector: 'brave-dashboard-carousel',
  templateUrl: './dashboard-carousel.component.html',
})
export class DashboardCarouselComponent implements OnInit {
  trends: IGetTrendingData | null | undefined = TESTERTRENDING
  @Input() report: IMergeReport | null | undefined;
  @Input() scores: IProductTrendingData[] | null | undefined;
  @Input() lastUpdated!: string;
  pages: any[] = [CreditReportGraphicComponent, CreditScoreHistoryNgxChartComponent];
  data: [ICreditReportGraphic, ICreditScoreHistoryNgxChartInputs] | undefined;

  constructor() {}

  ngOnInit(): void {
    let lastIndex;
    if (this.scores) {
      lastIndex = this.scores.length - 1;
    }
    const currentScore = this.report ? new ParseRiskScorePipe().transform(this.report) : null;
    const graphic: ICreditReportGraphic = !this.scores
      ? { currentValue: currentScore, ptsChange: 0 }
      : {
          currentValue: +this.scores[0].AttributeValue,
          ptsChange:
            this.scores[1] && lastIndex
              ? +this.scores[lastIndex].AttributeValue - +this.scores[lastIndex - 1].AttributeValue
              : undefined,
        };
    const chart: ICreditScoreHistoryNgxChartInputs = {
      trends: this.trends,
      report: this.report,
      lastUpdated: this.lastUpdated,
      currentCreditScore: currentScore,
    };
    this.data = [graphic, chart];
  }
}
