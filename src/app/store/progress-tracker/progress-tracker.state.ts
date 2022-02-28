import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as ProgressTrackerActions from './progress-tracker.actions';
import { ProgressTrackerStateModel } from '@store/progress-tracker';

@State<ProgressTrackerStateModel>({
  name: 'ProgressTracker',
  defaults: {
    data: null
  },
})
@Injectable()
export class ProgressTrackerState {
  constructor() {}

  @Action(ProgressTrackerActions.Add)
  addProgressTracker(ctx: StateContext<ProgressTrackerStateModel>, { payload }: ProgressTrackerActions.Add): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(ProgressTrackerActions.Update)
  updateProgressTracker(ctx: StateContext<ProgressTrackerStateModel>, { payload }: ProgressTrackerActions.Update): void {
    ctx.patchState({
      ...payload,
    });
  }
}
