import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';

@Component({
  selector: 'brave-dashboard-unenrolled',
  templateUrl: './dashboard-unenrolled.component.html',
})
export class DashboardUnenrolledComponent implements OnInit {
  @Input() name: string = '';
  @Input() defaultStrMessage = 'Welcome back!';
  @Input() initStrMessage: string = 'Welcome back!';
  @Input() hidden = 'hidden' as LabelOfSnapshot;
  @Input() update = 'update' as LabelOfSnapshot;
  @Input() new = 'new' as LabelOfSnapshot;
  @Input() critical = 'critical ' as SnapshotStatus;
  @Input() safe = 'safe ' as SnapshotStatus;
  @Input() danger = 'danger ' as SnapshotStatus;
  @Input() lastUpdated = 'Today';

  constructor() {}

  ngOnInit(): void {
    this.initStrMessage = 'Welcome back, ' + this.name;
  }

  onClickGetMyReport(): void {}
}
