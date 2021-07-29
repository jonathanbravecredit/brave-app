import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnInit {
  name: string = '';
  defaultStrMessage = 'Welcome back!';
  initStrMessage: string = 'Welcome back!';
  hidden = 'hidden' as LabelOfSnapshot;
  update = 'update' as LabelOfSnapshot;
  new = 'new' as LabelOfSnapshot;
  critical = 'critical ' as SnapshotStatus;
  safe = 'safe ' as SnapshotStatus;
  danger = 'danger ' as SnapshotStatus;
  lastUpdated = 'Today';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initStrMessage = 'Welcome back, ' + this.name;
  }
}
