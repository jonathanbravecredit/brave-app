import { ProgressTrackerStateModel } from '@store/progress-tracker/progress-tracker.model';

export class Add {
  static readonly type = '[ProgressTracker] Add';
  constructor(public payload: ProgressTrackerStateModel) {}
}

export class Update {
  static readonly type = '[ProgressTracker] Update';
  constructor(public payload: ProgressTrackerStateModel) {}
}
