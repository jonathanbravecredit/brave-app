import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  OnInit,
} from "@angular/core";
import { ICreditScoreHistoryNgxChart } from "@shared/components/charts/credit-score-history-ngx-chart";
import { IMergeReport } from "@shared/interfaces";
import { IResultsData } from "@shared/interfaces/common-ngx-charts.interface";
import { IGetTrendingData } from "@shared/interfaces/get-trending-data.interface";
import { CustomLineChartService } from "@shared/services/charts/custom-line-chart.service";
import { CreditScoreHistoryNgxChartService } from "./credit-score-history-ngx-chart.service";
import { MOCK_TRENDING_DATA_ONE_ATTR_MULTI_DATAPOINTS } from "../../../../testing/__mocks__/getTrendingData.mocks";

@Component({
  selector: "brave-credit-score-history-ngx-chart",
  templateUrl: "./credit-score-history-ngx-chart.component.html",
  styleUrls: ["./credit-score-history-ngx-chart.component.css"],
})
export class CreditScoreHistoryNgxChartComponent
  implements OnInit, AfterViewInit, ICreditScoreHistoryNgxChart
{
  @ViewChild("chart") chart: any;
  multi: IResultsData[] | undefined;
  // options
  @Input() view: [number, number] = [340, 140];
  @Input() trends: IGetTrendingData | null | undefined;
  @Input() report: IMergeReport | undefined;
  @Input() lastUpdated: number | string | Date | undefined;
  @Input() currentCreditScore: number | undefined;
  legend: boolean = false;
  showLabels: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisTicks = [300, 600, 850];
  yScaleMin = 300;
  yScaleMax = 850;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  tooltipDisabled: boolean = false;
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Population";
  timeline: boolean = false;
  showRefLines: boolean = true;
  referenceLines: object[] = [];
  showGridLines: boolean = false;
  trimXAxisTicks: boolean = false;
  data: {}[] | undefined;
  colorScheme = {
    domain: ["#222C9D"],
  };

  constructor(
    private customLineChartService: CustomLineChartService,
    private creditScoreNgxChartService: CreditScoreHistoryNgxChartService
  ) {
    this.customLineChartService.dotColor = "#222C9D";
  }

  ngOnInit(): void {
    this.handleChartScoreData();
    if (this.multi) {
      const multiZero = this.multi[0];
      const series = multiZero.series;
      const last = series[series.length - 1];
      this.referenceLines = last
        ? [
            {
              name: last.value.toString(),
              value: last.value,
            },
          ]
        : [];
    }
  }

  ngAfterViewInit(): void {
    this.customLineChartService.showDots(this.chart);
  }

  handleChartScoreData() {
    const dataProductAttributes = this.trends
      ? this.creditScoreNgxChartService.transformTrendingData(this.trends)
      : null;

    const chartData =
      this.creditScoreNgxChartService.createChartCreditScoreData(
        dataProductAttributes,
        this.currentCreditScore,
        this.lastUpdated
      );

    this.multi = chartData;
  }

  /**
   * This is an on select method....it selects things.
   * @param data
   */
  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatYTickMarks(val: any) {
    if (val === 850) return val;
    return (val / 10) % 2 === 0 ? val : "";
  }
}
