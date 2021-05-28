import { Selector } from '@ngxs/store';
import { User } from '@store/user/user.model';
import { UserState, UserStateModel } from '@store/user/user.state';

export class UserSelectors {
  @Selector([UserState])
  static getUser(state: UserStateModel): User {
    return state;
  }

  @Selector([UserState])
  static getUserId(state: UserStateModel): string | null {
    return state.id;
  }
}
