import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';

@Component({
  selector: 'brave-dashboard-unenrolled-pure',
  templateUrl: './dashboard-unenrolled-pure.component.html',
})
export class DashboardUnenrolledPureComponent {
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

  constructor() {}
}
