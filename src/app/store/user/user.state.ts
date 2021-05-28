import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import * as UserActions from './user.actions';
import { IUserAttributes, User } from '@store/user/user.model';

export class UserStateModel {
  id!: string | null;
  attributes!: IUserAttributes | null;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    id: null,
    attributes: null,
  },
})
@Injectable()
export class UserState {
  constructor() {}

  @Action(UserActions.Add)
  addUser(ctx: StateContext<UserStateModel>, { payload }: UserActions.Add) {
    const state = ctx.getState();
    ctx.patchState({
      ...payload,
    });
  }

  @Action(UserActions.Edit)
  updateUser(ctx: StateContext<UserStateModel>, { payload }: UserActions.Edit) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(UserActions.Delete)
  deleteUser(ctx: StateContext<UserStateModel>) {
    const payload = new User();
    ctx.patchState({
      ...payload,
    });
  }
}
