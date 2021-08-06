import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';
import { IMergeReport } from '@shared/interfaces';
import { IMergereportToDashboardOutput } from '@shared/pipes/mergereport-to-dashboard/mergereport-to-dashboard.pipe';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnInit {
  @Input() securityFreeze: boolean = false;
  @Input() cards: IMergereportToDashboardOutput | undefined;
  @Input() userName: string = '';
  @Input() defaultMsg: string = 'Welcome back!';
  @Input() initialMsg: string = 'Welcome back!';
  @Input() lastUpdated: string = 'Today';
  @Input() hidden = 'hidden' as LabelOfSnapshot;
  @Input() update = 'update' as LabelOfSnapshot;
  @Input() new = 'new' as LabelOfSnapshot;
  @Input() critical = 'critical ' as SnapshotStatus;
  @Input() safe = 'safe ' as SnapshotStatus;
  @Input() danger = 'danger ' as SnapshotStatus;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  @Input() report: IMergeReport | undefined;
  get score(): number | undefined {
    const riskScore: number = this.report?.TrueLinkCreditReportType?.Borrower?.CreditScore?.riskScore as number;
    const _score = Math.round(riskScore);
    if (isNaN(_score)) return;
    return _score;
  }
}
