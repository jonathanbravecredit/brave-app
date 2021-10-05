import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {},
})
@Injectable()
export class DashboardState {
  constructor() {}

  @Action(DashboardActions.Add)
  addDashboard(ctx: StateContext<DashboardStateModel>, { payload }: DashboardActions.Add) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(DashboardActions.Edit)
  updateDashboard(ctx: StateContext<DashboardStateModel>, { payload }: DashboardActions.Edit) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(DashboardActions.Delete)
  deleteUser(ctx: StateContext<DashboardStateModel>) {
    const payload = new DashboardStateModel();
    ctx.patchState({
      ...payload,
    });
  }

  @Action(DashboardActions.IncrementNegativeCardCount)
  incrementNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeCardCount = (state.negativeCardCount || 0) + 1;
    const negativeCardStatus = 'critical';
    ctx.patchState({
      ...state,
      negativeCardCount,
      negativeCardStatus,
    });
  }

  @Action(DashboardActions.DecrementNegativeCardCount)
  decrementNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeCardCount = (state.negativeCardCount || 0) <= 1 ? 0 : (state.negativeCardCount || 0) - 1;
    const negativeCardStatus = negativeCardCount <= 0 ? 'safe' : 'critical';
    ctx.patchState({
      ...state,
      negativeCardCount,
      negativeCardStatus,
    });
  }

  @Action(DashboardActions.IncrementForbearanceCardCount)
  incrementForbearanceCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceCardCount = (state.forbearanceCardCount || 0) + 1;
    const forbearanceCardStatus = 'danger';
    ctx.patchState({
      ...state,
      forbearanceCardCount,
      forbearanceCardStatus,
    });
  }

  @Action(DashboardActions.DecrementForbearanceCardCount)
  decrementForbearanceCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceCardCount = (state.forbearanceCardCount || 0) <= 1 ? 0 : (state.forbearanceCardCount || 0) - 1;
    const forbearanceCardStatus = forbearanceCardCount <= 0 ? 'safe' : 'danger';
    ctx.patchState({
      ...state,
      forbearanceCardCount,
      forbearanceCardStatus,
    });
  }

  @Action(DashboardActions.IncrementDatabreachCardCount)
  incrementDatabreachCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachCardCount = (state.databreachCardCount || 0) + 1;
    const databreachCardStatus = 'danger';
    ctx.patchState({
      ...state,
      databreachCardCount,
      databreachCardStatus,
    });
  }

  @Action(DashboardActions.DecrementDatabreachCardCount)
  decrementDatabreachCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachCardCount = (state.databreachCardCount || 0) <= 1 ? 0 : (state.databreachCardCount || 0) - 1;
    const databreachCardStatus = databreachCardCount <= 0 ? 'safe' : 'danger';
    ctx.patchState({
      ...state,
      databreachCardCount,
      databreachCardStatus,
    });
  }
}
