import { Selector } from '@ngxs/store';
import { ProgressTrackerStateModel } from '@store/progress-tracker/progress-tracker.model';
import { ProgressTrackerState } from '@store/progress-tracker/progress-tracker.state';

export class ProgressTrackerSelectors {
  @Selector([ProgressTrackerState])
  static getProgressTracker(state: ProgressTrackerStateModel): ProgressTrackerStateModel {
    return state;
  }
}
