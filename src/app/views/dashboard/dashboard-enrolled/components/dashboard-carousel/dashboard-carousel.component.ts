import { Component, Input, OnInit } from '@angular/core';
import { ICreditScoreHistoryNgxChartInputs } from '@shared/components/charts/credit-score-history-ngx-chart';
import { CreditScoreHistoryNgxChartComponent } from '@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { ICreditReportGraphic } from '@shared/components/graphics/credit-report-graphic';
import { CreditReportGraphicComponent } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.component';
import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { IDashboardData } from '@shared/services/dashboard/dashboard.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'brave-dashboard-carousel',
  templateUrl: './dashboard-carousel.component.html',
})
export class DashboardCarouselComponent implements OnInit {
  @Input() dashData: IDashboardData | undefined;
  @Input() updatedAt: string = new Date().toISOString();
  pages: any[] = [CreditReportGraphicComponent, CreditScoreHistoryNgxChartComponent];
  data: [ICreditReportGraphic, ICreditScoreHistoryNgxChartInputs] | undefined;
  private _sortedScores: IProductTrendingData[] = [];
  private _delta: number = 0;
  private _graphic!: ICreditReportGraphic;
  private _chart!: ICreditScoreHistoryNgxChartInputs;

  constructor() {}

  ngOnInit(): void {
    if (this.dashData) {
      const { dashTrends: trends, dashScores: scores, dashScore: score, dashReport: report } = this.dashData;
      this.sortedScores = scores?.length ? scores : [];
      this.delta = this.calculateDelta(this.sortedScores);
      this.graphic = this.formatGraphicData(score, this.delta);
      this.chart = this.formatChartData(trends, report, this.updatedAt, score);
      this.data = [this.graphic, this.chart];
    } else {
      console.log('no data');
    }
  }

  get delta(): number {
    return this._delta;
  }

  set delta(val: number) {
    this._delta = val;
  }

  get graphic(): ICreditReportGraphic {
    return this._graphic;
  }

  set graphic(val: ICreditReportGraphic) {
    this._graphic = val;
  }

  get chart(): ICreditScoreHistoryNgxChartInputs {
    return this._chart;
  }

  set chart(val: ICreditScoreHistoryNgxChartInputs) {
    this._chart = val;
  }

  get sortedScores(): IProductTrendingData[] {
    return this._sortedScores;
  }

  set sortedScores(val: IProductTrendingData[]) {
    this._sortedScores = [...val].sort((a, b) => {
      return dayjs(a.AttributeDate).isBefore(b.AttributeDate) ? -1 : 1;
    });
  }

  /**
   * Get the delta from the current sorted score and the prior score or zero
   * @param scores
   * @returns
   */
  calculateDelta(scores: IProductTrendingData[]): number {
    if (scores.length > 1) {
      let latestScore = +scores[scores.length - 1].AttributeValue;
      let lastMonthsScore = +scores[scores.length - 2].AttributeValue;
      return isNaN(latestScore) || isNaN(lastMonthsScore) ? 0 : latestScore - lastMonthsScore;
    } else {
      return 0;
    }
  }

  transformRiskScore(report: IMergeReport): number {
    return new ParseRiskScorePipe().transform(report);
  }

  /**
   * Helper method to format the graphic data
   * @param currentScore
   * @param sortedScores
   * @param delta
   * @returns
   */
  formatGraphicData(currentScore: number | null | undefined, delta: number): ICreditReportGraphic {
    return {
      currentValue: currentScore || null,
      ptsChange: delta,
    };
  }
  /**
   * Helper method to format the chart data
   * @param trends
   * @param report
   * @param lastUpdated
   * @param currentCreditScore
   * @returns
   */
  formatChartData(
    trends: IGetTrendingData | null | undefined,
    report: IMergeReport | null | undefined,
    lastUpdated: string,
    currentCreditScore: number | null,
  ): ICreditScoreHistoryNgxChartInputs {
    return {
      trends,
      report,
      lastUpdated,
      currentCreditScore,
    };
  }
}
