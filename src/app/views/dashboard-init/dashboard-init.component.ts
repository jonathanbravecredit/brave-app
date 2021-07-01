import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';

@Component({
  selector: 'brave-dashboard-init',
  templateUrl: './dashboard-init.component.html',
  styleUrls: ['./dashboard-init.component.css'],
})
export class DashboardInitComponent implements OnInit {
  name = 'Emily';
  defaultStrMessage = 'Welcome back!';
  initStrMessage = 'Welcome back, ' + this.name;
  hidden = 'hidden' as LabelOfSnapshot;
  update = 'update' as LabelOfSnapshot;
  new = 'new' as LabelOfSnapshot;
  critical = 'critical ' as SnapshotStatus;
  safe = 'safe ' as SnapshotStatus;
  danger = 'danger ' as SnapshotStatus;
  lastUpdated = 'Today';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToReport() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }
}
