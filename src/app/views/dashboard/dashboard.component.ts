import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { IDashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';
import { BraveUtil } from '@shared/utils/brave/brave';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'brave-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  securityFreeze$: Observable<boolean>;
  routeSub$: Subscription | undefined;
  showBack: boolean = false;
  public tag = RenderedViews.Dashboard;
  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {
    this.subscribeToRouteData();
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

  subscribeToRouteData(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      const { snapshots, trends, referral } = resp.dashboard as IDashboardResolver;
      if (snapshots) this.dashboardService.dashSnapshots$.next(snapshots);
      if (trends) this.dashboardService.dashTrends$.next(trends);
      if (trends) this.dashboardService.dashScores$.next(BraveUtil.parsers.parseTransunionTrendingData(trends));
      if (referral) this.dashboardService.dashReferral$.next(referral);
    });
  }
}
