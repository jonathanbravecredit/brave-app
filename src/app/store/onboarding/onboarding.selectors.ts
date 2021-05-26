import { Selector } from '@ngxs/store';
import {
  Onboarding,
  OnboardingState,
  OnboardingStateModel,
} from '@store/onboarding';

export class OnboardingSelectors {
  @Selector([OnboardingState])
  static getOnboarding(state: OnboardingStateModel): Onboarding {
    return state.onboarding;
  }
}
