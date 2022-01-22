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

  @Action(AgenciesActions.EditTransunion)
  updateTransunion(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.EditTransunion) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        ...payload,
      },
    });
  }

  @Action(AgenciesActions.IncrementTransunionAuthAttempts)
  incrementTransunionAuthAttempt(ctx: StateContext<AgenciesStateModel>) {
    const state = ctx.getState();
    const authAttempt = (state.transunion?.authAttempt || 0) + 1;
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        authAttempt,
      },
    });
  }

  @Action(AgenciesActions.InitiateTransunionPinDetails)
  initiateTransunionPinDetails(ctx: StateContext<AgenciesStateModel>) {
    const state = ctx.getState();
    const pinRequests = 1;
    const pinAttempts = 0;
    const pinCurrentAge = new Date().valueOf();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        pinRequests,
        pinAttempts,
        pinCurrentAge,
      },
    });
  }

  @Action(AgenciesActions.IncrementTransunionPinRequest)
  incrementTransunionPinRequest(ctx: StateContext<AgenciesStateModel>) {
    const state = ctx.getState();
    const pinRequests = (state.transunion?.pinRequests || 0) + 1;
    const pinCurrentAge = new Date().valueOf();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        pinRequests,
        pinCurrentAge,
      },
    });
  }

  @Action(AgenciesActions.IncrementTransunionPinAttempts)
  incrementTransunionPinAttempts(ctx: StateContext<AgenciesStateModel>) {
    const state = ctx.getState();
    const pinAttempts = (state.transunion?.pinAttempts || 0) + 1;
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        pinAttempts,
      },
    });
  }

  @Action(AgenciesActions.InitiateTransunionKBADetails)
  initiateTransunionKBADetails(ctx: StateContext<AgenciesStateModel>) {
    const state = ctx.getState();
    const kbaAttempts = 0;
    const kbaCurrentAge = new Date().valueOf();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        kbaAttempts,
        kbaCurrentAge,
      },
    });
  }

  @Action(AgenciesActions.UpdateAuthentication)
  updateAuthentication(ctx: StateContext<AgenciesStateModel>, { payload }: AgenciesActions.UpdateAuthentication) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      transunion: {
        ...state.transunion,
        authenticated: payload.authenticated,
        authenticatedOn: payload.authenticatedOn,
      },
    });
  }
}
