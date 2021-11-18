import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardScoreTrackingResolver implements Resolve<ICreditScoreTracking | null> {
  constructor(private transunion: TransunionService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ICreditScoreTracking | null> {
    const { success, data: scores } = await this.transunion.getCreditScores();
    if (success) {
      return scores || null;
    } else {
      return null;
    }
  }
}
