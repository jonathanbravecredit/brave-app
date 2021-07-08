import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AgenciesStateModel } from '@store/agencies/agencies.model';
import * as AgenciesActions from '@store/agencies/agencies.actions';

@State<AgenciesStateModel>({
  name: 'agencies',
  defaults: {},
})
@Injectable()
export class AgenciesState {
  constructor() {}

  @Action(AgenciesActions.Add)
  addAgencies(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.Add) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AgenciesActions.Edit)
  updateAgencies(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.Edit) {
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

  @Action(AgenciesActions.EditTransunionQuestions)
  updateTransunionQuestions(
    ctx: StateContext<AgenciesStateModel>,
    { payload }: AgenciesActions.EditTransunionQuestions,
  ) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        ...payload,
      },
    });
  }

  @Action(AgenciesActions.EditTransunionAuthDetails)
  updateTransunionAuthDetails(
    ctx: StateContext<AgenciesStateModel>,
    { payload }: AgenciesActions.EditTransunionAuthDetails,
  ) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        ...payload,
      },
    });
  }

  @Action(AgenciesActions.EditTransunionDisputes)
  updateTransunionDisputes(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.EditTransunionDisputes) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        disputes: payload,
      },
    });
  }

  @Action(AgenciesActions.EditTransunionDisputes)
  updateTransunionReports(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.EditTransunionReports) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        ...payload.transunion,
      },
    });
  }
}
