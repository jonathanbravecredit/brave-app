import { Component, ViewChild, AfterViewInit, Input } from "@angular/core";
import { IResultsData } from "@shared/interfaces/common-ngx-charts.interface";
import { CustomLineChartService } from "@shared/services/charts/custom-line-chart.service";

@Component({
  selector: "brave-credit-score-history-ngx-chart",
  templateUrl: "./credit-score-history-ngx-chart.component.html",
  styleUrls: ["./credit-score-history-ngx-chart.component.css"],
})
export class CreditScoreHistoryNgxChartComponent implements AfterViewInit {
  @ViewChild("chart") chart: any;
  @Input() multi: IResultsData[]
    | undefined;
  // options
  @Input() view: [number, number] = [300, 140];
  legend: boolean = false;
  showLabels: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisTicks = [350, 600, 850];
  yScaleMin = 350;
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

  colorScheme = {
    domain: ["#222C9D"],
  };

  constructor(private customLineChartService: CustomLineChartService) {
    this.customLineChartService.dotColor = "#222C9D";
  }

  ngAfterViewInit(): void {
    this.customLineChartService.showDots(this.chart);
    if (this.multi) {
      this.referenceLines = [
        {
          name: this.multi[0]!.series[
            this.multi[0]!.series.length - 1
          ].value.toString(),
          value: this.multi[0]!.series[this.multi[0]!.series.length - 1].value,
        },
      ];
    }
  }

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
