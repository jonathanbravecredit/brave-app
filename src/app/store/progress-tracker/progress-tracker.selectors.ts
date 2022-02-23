import { Selector } from '@ngxs/store';
import { ProgressTrackerState, ProgressTrackerStateModel } from '@store/progress-tracker';

export class ProgressTrackerSelectors {
  @Selector([ProgressTrackerState])
  static getProgressTracker(state: ProgressTrackerStateModel): ProgressTrackerStateModel {
    return state;
  }
}
