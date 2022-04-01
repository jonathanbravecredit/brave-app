import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dashboard-credit-score-error',
  templateUrl: './dashboard-credit-score-error.component.html',
})
export class DashboardCreditScoreErrorComponent implements OnInit {
  @Input() suppressed: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
