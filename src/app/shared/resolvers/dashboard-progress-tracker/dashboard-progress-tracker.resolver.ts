import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { ProgressTrackerSelectors } from '@store/progress-tracker';
import { Initiative } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';
import * as ProgressTrackerActions from '../../../store/progress-tracker/progress-tracker.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardProgressTrackerResolver implements Resolve<Initiative | null> {
  constructor(private store: Store, private progressTrackerService: ProgressTrackerService) {}

  async resolve(): Promise<Initiative | null> {
    const state = await this.store.selectOnce(ProgressTrackerSelectors.getProgressTracker).toPromise();
    if (state) {
      this.setProgressTracker(state.data);
      return state.data;
    } else {
      try {
        const data = await this.progressTrackerService.getProgressTrackerData();
        this.setProgressTracker(data);
        return data;
      } catch {
        return null;
      }
    }
  }

  async setProgressTracker(data: Initiative | null = null): Promise<void> {
    const payload = { data };
    await new Promise((resolve, reject) => {
      this.store
        .dispatch(new ProgressTrackerActions.Add(payload))
        .toPromise()
        .then((res) => {
          console.log('dispatch progressTrackerData: ', res);
          resolve(res); //the report
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
