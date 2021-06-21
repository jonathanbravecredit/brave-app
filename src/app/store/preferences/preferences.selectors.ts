import { Selector } from '@ngxs/store';
import { UserStateModel } from '@store/user/user.model';
import { UserState } from '@store/user/user.state';

export class UserSelectors {
  @Selector([UserState])
  static getUser(state: UserStateModel): UserStateModel {
    return state;
  }

  @Selector([UserState])
  static getUserId(state: UserStateModel): string | undefined {
    return state.id;
  }
}
