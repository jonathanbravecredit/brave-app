import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import * as ProgressTrackerActions from '../../../store/progress-tracker/progress-tracker.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardProgressTrackerResolver implements Resolve<Initiative | null> {
  constructor(private store: Store, private progressTrackerService: ProgressTrackerService) {}

  async resolve(): Promise<Initiative | null> {
    // const state = await this.store.selectOnce(ProgressTrackerSelectors.getProgressTracker).toPromise();
    const state = this.store.selectSnapshot((state) => state.ProgressTracker);
    if (state.data) {
      return state.data;
    } else {
      try {
        const data = await this.progressTrackerService.getProgressTrackerData();
        await this.setProgressTracker(data);
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
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
