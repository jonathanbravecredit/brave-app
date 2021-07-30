import { Component, OnInit } from '@angular/core';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private creditReportService: CreditreportService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {
    // this.dashboardService.refreshReport();
  }
}
