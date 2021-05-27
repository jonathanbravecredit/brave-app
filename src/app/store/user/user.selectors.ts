import { Selector } from '@ngxs/store';
import { UserState, UserStateModel } from '@store/user/user.state';

export class OnboardingSelectors {
  @Selector([UserState])
  static getUserId(state: UserStateModel): string | null {
    return state.id;
  }

  @Selector([UserState])
  static signedIn(state: UserStateModel): boolean {
    return state.signedIn;
  }
}
