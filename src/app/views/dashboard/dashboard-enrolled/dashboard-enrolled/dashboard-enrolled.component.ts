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
  lastUpdated: string | undefined | null;
  tuReport$: Observable<IMergeReport>;

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {
    this.tuReport$ = this.dashboardService.tuReport$.asObservable();
    this.userName = this.dashboardService.state?.user?.userAttributes?.name?.first;
    this.lastUpdated = this.dashboardService.state?.agencies?.transunion?.fulfilledOn;
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
