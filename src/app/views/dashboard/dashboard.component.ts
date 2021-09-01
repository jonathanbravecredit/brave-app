import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  securityFreeze$: Observable<boolean>;
  showBack: boolean = false;
  constructor(
    private dashboardService: DashboardService,
    private creditReportService: CreditreportService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.securityFreeze$ = this.dashboardService.isCreditFreezeEnabled();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBack = this.router.url !== '/dashboard/init';
      }
    });
  }

  ngOnInit(): void {}

  goToLink(link: string) {
    this.router.navigate([`./${link}`], { relativeTo: this.route });
  }
}
