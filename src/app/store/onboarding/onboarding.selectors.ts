import { Selector } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding/onboarding.model';
import { OnboardingState } from '@store/onboarding/onboarding.state';

export class OnboardingSelectors {
  @Selector([OnboardingState])
  static getOnboarding(state: OnboardingStateModel): OnboardingStateModel {
    return state;
  }
}
