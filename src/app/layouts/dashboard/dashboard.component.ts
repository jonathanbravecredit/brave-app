import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(
    private sync: SyncService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {}
}
