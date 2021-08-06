import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  securityFreeze$: Observable<boolean>;
  constructor(
    private dashboardService: DashboardService,
    private creditReportService: CreditreportService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.securityFreeze$ = this.dashboardService.isCreditFreezeEnabled();
  }

  ngOnInit(): void {}

  goToLink(link: string) {
    this.router.navigate([`./${link}`], { relativeTo: this.route });
  }
}
