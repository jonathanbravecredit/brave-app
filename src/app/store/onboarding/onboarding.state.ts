import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as OnboardingActions from './onboarding.actions';
import { Onboarding } from '@store/onboarding/onboarding.model';

export class OnboardingStateModel {
  onboarding!: Onboarding;
  loaded!: boolean;
}

@State<OnboardingStateModel>({
  name: 'onboarding',
  defaults: {
    onboarding: new Onboarding(),
    loaded: false,
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
    const state = ctx.getState();
    const onboarding = payload;
    ctx.setState({
      ...state,
      onboarding,
    });
  }

  @Action(OnboardingActions.Edit)
  updateOnboaring(
    ctx: StateContext<OnboardingStateModel>,
    { payload }: OnboardingActions.Edit
  ): void {
    const state = ctx.getState();
    const onboarding = {
      ...state,
      ...payload,
    };
    ctx.patchState({
      onboarding,
    });
  }

  @Action(OnboardingActions.Delete)
  deleteOnboarding(
    ctx: StateContext<OnboardingStateModel>,
    {}: OnboardingActions.Delete
  ): void {
    const state = ctx.getState();
    const onboarding = new Onboarding();
    ctx.setState({
      ...state,
      onboarding,
    });
  }
}
