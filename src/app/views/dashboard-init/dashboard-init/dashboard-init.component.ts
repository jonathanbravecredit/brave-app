import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import { LabelOfSnapshot } from '@shared/components/cards/snapshot-display-card/snapshot-label.pipe';

@Component({
  selector: 'brave-dashboard-init',
  templateUrl: './dashboard-init.component.html',
})
export class DashboardInitComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToReport() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }
}
