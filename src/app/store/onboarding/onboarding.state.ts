import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as OnboardingActions from './onboarding.actions';
import { OnboardingStateModel } from '@store/onboarding/onboarding.model';
import { BraveUtil } from '@shared/utils/brave/brave';

@State<OnboardingStateModel>({
  name: 'onboarding',
  defaults: {
    lastActive: -1,
    lastComplete: -1,
    started: false,
  },
})
@Injectable()
export class OnboardingState {
  constructor() {}

  @Action(OnboardingActions.Add)
  addOnboarding(ctx: StateContext<OnboardingStateModel>, { payload }: OnboardingActions.Add): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(OnboardingActions.Edit)
  updateOnboaring(ctx: StateContext<OnboardingStateModel>, { payload }: OnboardingActions.Edit): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(OnboardingActions.Delete)
  deleteOnboarding(ctx: StateContext<OnboardingStateModel>, {}: OnboardingActions.Delete): void {
    const payload = new OnboardingStateModel();
    ctx.patchState({
      ...payload,
    });
  }

  @Action(OnboardingActions.UpdateLastActive)
  updateLastActive(ctx: StateContext<OnboardingStateModel>, { payload }: OnboardingActions.UpdateLastActive): void {
    ctx.patchState({
      lastActive: payload,
    });
  }

  @Action(OnboardingActions.UpdateLastComplete)
  updateLastComplete(ctx: StateContext<OnboardingStateModel>, { payload }: OnboardingActions.UpdateLastComplete): void {
    ctx.patchState({
      lastComplete: payload,
    });
  }

  @Action(OnboardingActions.ResetOnboarding)
  resetOnboarding(ctx: StateContext<OnboardingStateModel>): void {
    const { lastComplete, lastActive, started } = BraveUtil.generators.createInitOnboardingState();
    ctx.patchState({
      lastComplete,
      lastActive,
      started,
    });
  }
}
