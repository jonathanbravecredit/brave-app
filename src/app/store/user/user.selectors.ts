import { Selector } from '@ngxs/store';
import { UserState, UserStateModel } from '@store/user/user.state';

export class OnboardingSelectors {
  @Selector([UserState])
  static getUser(state: UserStateModel) {
    return state.user;
  }

  @Selector([UserState])
  static loaded(state: UserStateModel) {
    return state.loaded;
  }
}
