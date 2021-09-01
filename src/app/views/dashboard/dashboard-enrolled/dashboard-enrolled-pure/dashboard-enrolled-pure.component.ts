import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { IMergereportToDashboardOutput } from '@shared/pipes/mergereport-to-dashboard/mergereport-to-dashboard.pipe';
import { dashboardEnrolledContent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnInit {
  @Input() report: IMergeReport | undefined;
  @Input() cards: IMergereportToDashboardOutput | undefined;
  @Input() welcomeMsg: string | undefined = dashboardEnrolledContent.defaultMsg;
  @Input() lastUpdated: Date | undefined;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();

  content = dashboardEnrolledContent;
  forbearanceClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  get score(): number | undefined {
    const creditScore = this.report?.TrueLinkCreditReportType?.Borrower?.CreditScore;
    if (creditScore instanceof Array) {
      const score = creditScore.find((value) => {
        return value.scoreName.toLowerCase() === 'vantagescore3';
      });
      const _score = Math.round(score?.riskScore as number);
      if (isNaN(_score)) return;
      console.log('_score ===>  ', _score);
      return _score;
    } else {
      const score = creditScore?.riskScore;
      const _score = Math.round(score as number);
      console.log('riskScore ===>  ', score, _score);
      if (isNaN(_score)) return;
      console.log('_score ===>  ', _score);
      return _score;
    }
  }
}
