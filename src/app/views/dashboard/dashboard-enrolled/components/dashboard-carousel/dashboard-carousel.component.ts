import { Component, Input, OnInit } from '@angular/core';
import { ICreditScoreHistoryNgxChartInputs } from '@shared/components/charts/credit-score-history-ngx-chart';
import { CreditScoreHistoryNgxChartComponent } from '@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { ICreditReportGraphic } from '@shared/components/graphics/credit-report-graphic';
import { CreditReportGraphicComponent } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.component';
import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';

@Component({
  selector: 'brave-dashboard-carousel',
  templateUrl: './dashboard-carousel.component.html',
})
export class DashboardCarouselComponent implements OnInit {
  @Input() trends: IGetTrendingData | null | undefined;
  @Input() report: IMergeReport | null | undefined;
  @Input() scores: IProductTrendingData[] | null | undefined;
  @Input() lastUpdated!: string;
  @Input() currentScore: number | null = null;
  pages: any[] = [CreditReportGraphicComponent, CreditScoreHistoryNgxChartComponent];
  data: [ICreditReportGraphic, ICreditScoreHistoryNgxChartInputs] | undefined;
  private _sortedScores: IProductTrendingData[] = [];
  private _delta: number = 0;
  private _graphic!: ICreditReportGraphic;
  private _chart!: ICreditScoreHistoryNgxChartInputs;

  constructor() {}

  ngOnInit(): void {
    this.sortedScores = this.scores?.length ? this.scores : [];
    this.delta = this.calculateDelta(this.sortedScores);
    this.graphic = this.formatGraphicData(this.currentScore, this.delta);
    this.chart = this.formatChartData(this.trends, this.report, this.lastUpdated, this.currentScore);
    this.data = [this.graphic, this.chart];
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
      const aDate = new Date(a.AttributeDate || 0).valueOf();
      const bDate = new Date(b.AttributeDate || 0).valueOf();
      return bDate - aDate;
    });
  }

  /**
   * Get the delta from the current sorted score and the prior score or zero
   * @param scores
   * @returns
   */
  calculateDelta(scores: IProductTrendingData[]): number {
    if (scores.length > 1) {
      return isNaN(+scores[0].AttributeValue) || isNaN(+scores[1].AttributeValue)
        ? 0
        : +scores[0].AttributeValue - +scores[1].AttributeValue;
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
  formatGraphicData(currentScore: number | null, delta: number): ICreditReportGraphic {
    return {
      currentValue: currentScore,
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
