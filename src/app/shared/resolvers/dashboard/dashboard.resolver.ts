import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';
import { DashboardInitResolver } from '@shared/resolvers/dashboard-init/dashboard-init.resolver';
import { DashboardReferralsResolver } from '@shared/resolvers/dashboard-referrals/dashboard-referrals.resolver';
import { DashboardScoreTrackingResolver } from '@shared/resolvers/dashboard-score-tracking/dashboard-score-tracking.resolver';
import { DashboardScoreTrendsResolver } from '@shared/resolvers/dashboard-score-trends/dashboard-score-trends.resolver';
import { DashboardSnapshotsResolver } from '@shared/resolvers/dashboard-snapshots/dashboard-snapshots.resolver';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { forkJoin } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

export interface IDashboardResolver {
  report: IMergeReport | null;
  snapshots: DashboardStateModel | null;
  scores: ICreditScoreTracking | null;
  trends: IGetTrendingData | null;
  referrals: IGroupedYearMonthReferral[] | null;
  referral: IReferral | null;
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
    protected referralResolver: ReferralResolver,
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IDashboardResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();

    return forkJoin([
      this.initResolver.resolve(route, state),
      this.snapshotsResolver.resolve(route, state),
      this.scoreTrackingResolver.resolve(route, state),
      this.scoreTrendsResolver.resolve(route, state),
      this.referralsResolver.resolve(route, state),
      this.referralResolver.resolve(route, state),
    ])
      .pipe(
        map((value) => {
          return {
            report: value[0],
            snapshots: value[1],
            scores: value[2],
            trends: value[3],
            referrals: value[4],
            referral: value[5].referral,
          };
        }),
        finalize(() => {
          this.interstitial.closeInterstitial();
        }),
      )
      .toPromise();
  }
}
