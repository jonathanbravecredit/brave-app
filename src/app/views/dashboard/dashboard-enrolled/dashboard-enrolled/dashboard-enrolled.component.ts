import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnInit {
  userName: string | undefined;
  welcomeMsg: string | undefined;
  lastUpdated: number | string | Date | undefined;
  report: IMergeReport | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {
    this.route.data.subscribe((resp: any) => {
      this.report = resp.report;
    });
    this.dashboardService.tuReport$.subscribe((report) => (this.report = report));
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    const fullfilled = this.dashboardService.state?.agencies?.transunion?.fulfilledOn;
    if (fullfilled) {
      this.lastUpdated = new Date(fullfilled).toLocaleDateString();
    }
  }

  ngOnInit(): void {
    if (this.userName) this.welcomeMsg = 'Welcome back, ' + this.userName;
  }

  onNegativeItemsClicked() {
    this.router.navigate(['../report/snapshot/negative'], { relativeTo: this.route });
  }

  onForbearanceItemsClicked() {
    this.router.navigate(['../report/snapshot/forbearance'], { relativeTo: this.route });
  }

  onFullReportClicked() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }

  onDatabreachItemsClicked() {
    this.router.navigate(['../report/snapshot/databreach'], { relativeTo: this.route });
  }
}
