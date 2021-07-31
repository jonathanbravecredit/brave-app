import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.dashboardService.refreshReport();
  }

  goToLink(link: string) {
    this.router.navigate([`./${link}`], { relativeTo: this.route });
  }
}
