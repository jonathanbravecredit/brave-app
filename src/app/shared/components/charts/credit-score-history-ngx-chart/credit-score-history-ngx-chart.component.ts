import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { multi } from './data';
import { CustomLineChartService } from '@shared/services/charts/custom-line-chart.service';

@Component({
  selector: 'brave-credit-score-history-ngx-chart',
  templateUrl: './credit-score-history-ngx-chart.component.html',
  styleUrls: ['./credit-score-history-ngx-chart.component.css'],
})
export class CreditScoreHistoryNgxChartComponent implements AfterViewInit {
  @ViewChild('chart') chart: any;
  multi!: any[];
  // options
  @Input() view: [number, number] = [400, 212];
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisTicks = [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850];
  yScaleMin = 300;
  yScaleMax = 850;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  tooltipDisabled: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;

  colorScheme = {
    domain: ['#D946EF'],
  };

  constructor(private customLineChartService: CustomLineChartService) {
    this.customLineChartService.dotColor = '#3730A3';
    Object.assign(this, { multi });
  }

  ngAfterViewInit(): void {
    this.customLineChartService.showDots(this.chart);
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
    return (val / 10) % 2 === 0 ? val : '';
  }
}
