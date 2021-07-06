import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-score-graphic-tabs',
  templateUrl: './credit-score-graphic-tabs.component.html',
})
export class CreditScoreGraphicTabsComponent implements OnInit {
  openTab = 1;
  constructor() {}

  ngOnInit(): void {}

  toggleTabs(tabNumber: number) {
    this.openTab = tabNumber;
  }
}
