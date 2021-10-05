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
    const negativeReviewed = false;
    ctx.patchState({
      ...state,
      negativeCardCount,
      negativeCardStatus,
      negativeReviewed,
    });
  }

  @Action(DashboardActions.DecrementNegativeCardCount)
  decrementNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeCardCount = (state.negativeCardCount || 0) <= 1 ? 0 : (state.negativeCardCount || 0) - 1;
    const negativeCardStatus = negativeCardCount <= 0 ? 'safe' : 'critical';
    const negativeReviewed = negativeCardCount <= 0 ? true : false;
    ctx.patchState({
      ...state,
      negativeCardCount,
      negativeCardStatus,
      negativeReviewed,
    });
  }

  @Action(DashboardActions.IncrementForbearanceCardCount)
  incrementForbearanceCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceCardCount = (state.forbearanceCardCount || 0) + 1;
    const forbearanceCardStatus = 'danger';
    const forbearanceReviewed = false;
    ctx.patchState({
      ...state,
      forbearanceCardCount,
      forbearanceCardStatus,
      forbearanceReviewed,
    });
  }

  @Action(DashboardActions.DecrementForbearanceCardCount)
  decrementForbearanceCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceCardCount = (state.forbearanceCardCount || 0) <= 1 ? 0 : (state.forbearanceCardCount || 0) - 1;
    const forbearanceCardStatus = forbearanceCardCount <= 0 ? 'safe' : 'danger';
    const forbearanceReviewed = forbearanceCardCount <= 0 ? true : false;
    ctx.patchState({
      ...state,
      forbearanceCardCount,
      forbearanceCardStatus,
      forbearanceReviewed,
    });
  }

  @Action(DashboardActions.IncrementDatabreachCardCount)
  incrementDatabreachCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachCardCount = (state.databreachCardCount || 0) + 1;
    const databreachCardStatus = 'danger';
    const databreachReviewed = false;
    ctx.patchState({
      ...state,
      databreachCardCount,
      databreachCardStatus,
      databreachReviewed,
    });
  }

  @Action(DashboardActions.DecrementDatabreachCardCount)
  decrementDatabreachCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachCardCount = (state.databreachCardCount || 0) <= 1 ? 0 : (state.databreachCardCount || 0) - 1;
    const databreachCardStatus = databreachCardCount <= 0 ? 'safe' : 'danger';
    const databreachReviewed = databreachCardCount <= 0 ? true : false;
    ctx.patchState({
      ...state,
      databreachCardCount,
      databreachCardStatus,
      databreachReviewed,
    });
  }
}
