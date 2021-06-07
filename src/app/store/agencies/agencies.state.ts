import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AgenciesStateModel } from '@store/agencies';
import * as AgenciesActions from './agencies.actions';

@State<AgenciesStateModel>({
  name: 'agencies',
  defaults: {},
})
@Injectable()
export class AgenciesState {
  constructor() {}

  @Action(AgenciesActions.Add)
  addAgencies(
    ctx: StateContext<AgenciesStateModel>,
    { payload }: AgenciesActions.Add
  ) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AgenciesActions.Edit)
  updateAgencies(
    ctx: StateContext<AgenciesStateModel>,
    { payload }: AgenciesActions.Edit
  ) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AgenciesActions.Delete)
  deleteUser(ctx: StateContext<AgenciesStateModel>) {
    const payload = new AgenciesStateModel();
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AgenciesActions.Delete)
  updateQuestions(
    ctx: StateContext<AgenciesStateModel>,
    { payload }: AgenciesActions.EditQuestions
  ) {
    ctx.patchState({ currentRawQuestions: payload });
  }
}
