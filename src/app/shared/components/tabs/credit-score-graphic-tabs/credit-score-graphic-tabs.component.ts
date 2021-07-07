import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'brave-credit-score-graphic-tabs',
  templateUrl: './credit-score-graphic-tabs.component.html',
})
export class CreditScoreGraphicTabsComponent implements OnInit {
  lineChartData3Month: ChartDataSets[] = [
    {
      data: [581, 620, 621],
      label: 'Series A',
      fill: false,
      borderWidth: 2,
    },
  ];
  lineChartLabels3Month: Label[] = ['May', 'Jun', 'Jul'];

  lineChartData6Month: ChartDataSets[] = [
    {
      data: [null, 550, 590, 586, 581, 620, 621],
      label: 'Series A',
      fill: false,
      borderWidth: 2,
    },
  ];
  lineChartLabels6Month: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  openTab = 1;

  constructor() {}

  ngOnInit(): void {}

  toggleTabs(tabNumber: number) {
    this.openTab = tabNumber;
  }
}
