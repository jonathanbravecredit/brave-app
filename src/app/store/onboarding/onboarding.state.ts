import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as OnboardingActions from './onboarding.actions';
import { Onboarding, OnboardingStep } from '@store/onboarding/onboarding.model';

export class OnboardingStateModel {
  started!: boolean;
  steps!: OnboardingStep[];
}

@State<OnboardingStateModel>({
  name: 'onboarding',
  defaults: {
    started: false,
    steps: [],
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
    const payload = new Onboarding();
    ctx.patchState({
      ...payload,
    });
  }
}
