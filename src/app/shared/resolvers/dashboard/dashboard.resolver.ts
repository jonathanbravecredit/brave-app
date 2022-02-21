import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { CreditReportResolver } from '@shared/resolvers/credit-report/credit-report.resolver';
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
    protected creditReportResolver: CreditReportResolver,
  ) {}

  async resolve(): Promise<IDashboardResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();

    const report = await this.creditReportResolver.resolve();
    // keep this ordering
    return forkJoin([
      this.initResolver.resolve(),
      this.snapshotsResolver.resolve(),
      this.scoreTrendsResolver.resolve(),
      this.referralResolver.resolve(),
    ])
      .pipe(
        map(([init, snapshots, trends, referrals]) => {
          return {
            report: report, // snapshots depends on this so wait
            snapshots: snapshots,
            trends: trends,
            referral: referrals.referral,
          };
        }),
        finalize(() => {
          this.interstitial.closeInterstitial();
        }),
      )
      .toPromise();
  }
}
