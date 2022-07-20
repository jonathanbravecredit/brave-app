import { Component, OnDestroy, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { IDashboardResolver } from "@shared/resolvers/dashboard/dashboard.resolver";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import { RenderedService, RenderedViews } from "@shared/services/monitor/rendered/rendered.service";
import { BraveUtil } from "@shared/utils/brave/brave";
import { Observable, Subscription } from "rxjs";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Los_Angeles");

@Component({
  selector: "brave-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  securityFreeze$: Observable<boolean>;
  routeSub$: Subscription | undefined;
  showBack: boolean = false;

  siteClosed: boolean = dayjs().isAfter(dayjs("2022-08-31"));

  public tag = RenderedViews.Dashboard;
  constructor(
    private rendered: RenderedService,
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscribeToRouteData();
    this.securityFreeze$ = this.dashboardService.isCreditFreezeEnabled();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBack = this.router.url !== "/dashboard/init";
      }
    });
  }

  ngAfterViewInit(): void {
    this.rendered.checkStatus();
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  goToLink(link: string) {
    this.router.navigate([`./${link}`], { relativeTo: this.route });
  }

  subscribeToRouteData(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      const { snapshots, trends, referral, metrics } = resp.dashboard as IDashboardResolver;
      if (snapshots) this.dashboardService.dashSnapshots$.next(snapshots);
      if (metrics) this.dashboardService.dashMetrics$.next(metrics);
      if (trends) this.dashboardService.dashTrends$.next(trends);
      if (trends) this.dashboardService.dashScores$.next(BraveUtil.parsers.parseTransunionTrendingData(trends));
      if (referral) this.dashboardService.dashReferral$.next(referral);
    });
  }
}
