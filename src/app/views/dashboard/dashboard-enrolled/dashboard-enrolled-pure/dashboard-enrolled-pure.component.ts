import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { dashboardEnrolledContent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnInit {
  @Input() report: IMergeReport | undefined;
  @Input() cards: DashboardStateModel | undefined;
  @Input() scores: ICreditScoreTracking | undefined | null;
  @Input() welcomeMsg: string | undefined = dashboardEnrolledContent.defaultMsg;
  @Input() lastUpdated: number | string | Date | undefined;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  @Output() disputesClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditUtilizationClicked: EventEmitter<void> = new EventEmitter();
  content = dashboardEnrolledContent;
  forbearanceClicked: boolean = false;
  showDisclaimer: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
