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
  @Input() lastUpdated: string | undefined | null;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();

  content = dashboardEnrolledContent;
  forbearanceClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  get score(): number | undefined {
    const riskScore: number = this.report?.TrueLinkCreditReportType?.Borrower?.CreditScore?.riskScore as number;
    const _score = Math.round(riskScore);
    if (isNaN(_score)) return;
    return _score;
  }
}
