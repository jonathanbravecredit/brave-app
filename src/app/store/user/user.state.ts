import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import * as UserActions from './user.actions';
import { User } from '@store/user';

export class UserStateModel {
  user!: User;
  loaded!: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: new User(),
    loaded: false,
  },
})
@Injectable()
export class UserState {
  constructor() {}

  @Action(UserActions.Add)
  addUser(ctx: StateContext<UserStateModel>, { payload }: UserActions.Add) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: payload,
      loaded: true,
    });
  }

  @Action(UserActions.Edit)
  updateUser(ctx: StateContext<UserStateModel>, { payload }: UserActions.Edit) {
    const user = payload;
    ctx.patchState({
      user,
    });
  }

  @Action(UserActions.Delete)
  deleteUser(ctx: StateContext<UserStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: new User(),
      loaded: false,
    });
  }
}
