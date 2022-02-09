import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { DashboardInitResolver } from '@shared/resolvers/dashboard-init/dashboard-init.resolver';
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
  trends: IGetTrendingData | null;
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
    protected scoreTrendsResolver: DashboardScoreTrendsResolver,
    protected referralResolver: ReferralResolver,
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IDashboardResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();

    return forkJoin([
      this.initResolver.resolve(route, state),
      this.snapshotsResolver.resolve(route, state),
      this.scoreTrendsResolver.resolve(route, state),
      this.referralResolver.resolve(route, state),
    ])
      .pipe(
        map((value) => {
          return {
            report: value[0],
            snapshots: value[1],
            trends: value[2],
            referral: value[3].referral,
          };
        }),
        finalize(() => {
          this.interstitial.closeInterstitial();
        }),
      )
      .toPromise();
  }
}
