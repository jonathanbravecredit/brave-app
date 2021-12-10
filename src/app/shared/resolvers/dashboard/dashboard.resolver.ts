import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { DashboardInitResolver } from '@shared/resolvers/dashboard-init/dashboard-init.resolver';
import { DashboardReferralsResolver } from '@shared/resolvers/dashboard-referrals/dashboard-referrals.resolver';
import { DashboardScoreTrackingResolver } from '@shared/resolvers/dashboard-score-tracking/dashboard-score-tracking.resolver';
import { DashboardScoreTrendsResolver } from '@shared/resolvers/dashboard-score-trends/dashboard-score-trends.resolver';
import { DashboardSnapshotsResolver } from '@shared/resolvers/dashboard-snapshots/dashboard-snapshots.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

export interface IDashboardResolver {
  report: IMergeReport | null;
  snapshots: DashboardStateModel | null;
  scores: ICreditScoreTracking | null;
  trends: IGetTrendingData | null;
  referrals: IGroupedYearMonthReferral[] | null;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<IDashboardResolver> {
  constructor(
    private interstitial: InterstitialService,
    protected initResolver: DashboardInitResolver,
    protected snapshotsResolver: DashboardSnapshotsResolver,
    protected scoreTrackingResolver: DashboardScoreTrackingResolver,
    protected scoreTrendsResolver: DashboardScoreTrendsResolver,
    protected referralsResolver: DashboardReferralsResolver,
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IDashboardResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    const report = await this.initResolver.resolve(route, state);
    const snapshots = await this.snapshotsResolver.resolve(route, state);
    const scores = await this.scoreTrackingResolver.resolve(route, state);
    const trends = await this.scoreTrendsResolver.resolve(route, state);
    const referrals = await this.referralsResolver.resolve(route, state);
    this.interstitial.closeInterstitial();
    return {
      report,
      snapshots,
      scores,
      trends,
      referrals,
    };
  }
}
