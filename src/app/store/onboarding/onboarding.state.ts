import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as OnboardingActions from './onboarding.actions';
import { OnboardingStateModel } from '@store/onboarding/onboarding.model';

@State<OnboardingStateModel>({
  name: 'onboarding',
  defaults: {
    lastActive: 0,
    lastComplete: -1,
    started: false,
  },
})
@Injectable()
export class OnboardingState {
  constructor() {}

  @Action(OnboardingActions.Add)
  addOnboarding(
    ctx: StateContext<OnboardingStateModel>,
    { payload }: OnboardingActions.Add
  ): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(OnboardingActions.Edit)
  updateOnboaring(
    ctx: StateContext<OnboardingStateModel>,
    { payload }: OnboardingActions.Edit
  ): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(OnboardingActions.Delete)
  deleteOnboarding(
    ctx: StateContext<OnboardingStateModel>,
    {}: OnboardingActions.Delete
  ): void {
    const payload = new OnboardingStateModel();
    ctx.patchState({
      ...payload,
    });
  }
}
