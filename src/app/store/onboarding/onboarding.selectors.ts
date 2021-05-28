import { Selector } from '@ngxs/store';
import { Onboarding } from '@store/onboarding/onboarding.model';
import {
  OnboardingState,
  OnboardingStateModel,
} from '@store/onboarding/onboarding.state';

export class OnboardingSelectors {
  @Selector([OnboardingState])
  static getOnboarding(state: OnboardingStateModel): Onboarding {
    return state;
  }
}
