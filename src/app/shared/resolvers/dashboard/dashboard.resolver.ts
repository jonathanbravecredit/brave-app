import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { DashboardInitResolver } from '@shared/resolvers/dashboard-init/dashboard-init.resolver';
import { DashboardSnapshotsResolver } from '@shared/resolvers/dashboard-snapshots/dashboard-snapshots.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver
  implements Resolve<{ report: IMergeReport | null; snapshots: DashboardStateModel | null }> {
  constructor(
    private interstitial: InterstitialService,
    protected initResolver: DashboardInitResolver,
    protected snapshotsResolver: DashboardSnapshotsResolver,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<{ report: IMergeReport | null; snapshots: DashboardStateModel | null }> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    const report = await this.initResolver.resolve(route, state);
    const snapshots = await this.snapshotsResolver.resolve(route, state);
    this.interstitial.closeInterstitial();
    return {
      report,
      snapshots,
    };
  }
}
