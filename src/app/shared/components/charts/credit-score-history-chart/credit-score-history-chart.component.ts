import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'brave-credit-score-history-chart',
  templateUrl: './credit-score-history-chart.component.html',
})
export class CreditScoreHistoryChartComponent implements OnInit {
  @Input() lineChartData: ChartDataSets[] = [
    {
      data: [null, 550, 590, 586, 581, 620, 621],
      label: 'Series A',
      fill: false,
      borderWidth: 2,
    },
  ];
  @Input() lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public lineChartOptions: ChartOptions = {
    plugins: {
      datalabels: {
        color: '#3730A3',
      },
    },
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
          position: 'bottom',
          ticks: {
            padding: 8,
            major: {
              enabled: true,
            },
          },
          gridLines: {
            lineWidth: 1,
            drawBorder: true,
            drawOnChartArea: false,
            drawTicks: true,
            tickMarkLength: 8,
            color: '#3730A3',
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontSize: 10,
            padding: 4,
            major: {
              enabled: true,
            },
            stepSize: 50,
            min: 300,
            max: 850,
            callback: (value, idx) => {
              if (value === 850) return value;
              return idx % 2 === 0 ? '' : value;
            },
          },
          gridLines: {
            borderDashOffset: 4,
            drawBorder: false,
            lineWidth: 0.5,
            color: '#fff',
            zeroLineWidth: 0,
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
