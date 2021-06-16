import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}
}
