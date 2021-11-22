import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardScoreTrendsResolver implements Resolve<any[]> {
  constructor(private transunion: TransunionService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> {
    const now = new Date();
    now.setMonth(now.getMonth() - 12);
    const { success, data: scores } = await this.transunion.getTrendingData(now.toISOString());
    if (success) {
      if (scores instanceof Array) {
        return scores;
      } else {
        return [scores];
      }
    } else {
      return [];
    }
  }
}
