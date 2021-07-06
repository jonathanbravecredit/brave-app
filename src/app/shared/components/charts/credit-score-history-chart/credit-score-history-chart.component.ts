import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'brave-credit-score-history-chart',
  templateUrl: './credit-score-history-chart.component.html',
})
export class CreditScoreHistoryChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{ data: [550, 590, 586, 581, 620, 621, null], label: 'Series A' }];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    elements: {
      line: {
        tension: 0,
      },
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          offset: true,
          ticks: {
            major: {
              enabled: true,
            },
            stepSize: 100,
            min: 300,
            max: 850,
          },
          gridLines: {
            color: '#fff',
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      // grey
      borderColor: '#D946EF',
      pointBackgroundColor: '#3730A3',
      pointBorderColor: '#3730A3',
      pointHoverBackgroundColor: '#3730A3',
      pointHoverBorderColor: '#3730A3',
    },
  ];
  lineChartLegend = false;
  lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {}
}
