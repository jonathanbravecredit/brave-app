import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { IBreachCard } from '@shared/interfaces/breach-card.interface';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    isLoaded: false,
    isFresh: false,
  },
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
    const negativeCardCount = (state ? state.negativeCardCount || 0 : 0) + 1;
    ctx.patchState({
      ...state,
      negativeCardCount,
    });
  }

  @Action(DashboardActions.DecrementNegativeCardCount)
  DecrementNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeCardCount =
      (state ? state.negativeCardCount || 0 : 0) - 1 <= 0 ? 0 : (state ? state.negativeCardCount || 0 : 0) - 1;
    ctx.patchState({
      ...state,
      negativeCardCount,
    });
  }

  @Action(DashboardActions.FlagNegativeSnapshot)
  flagNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeFlagged = true;
    const negativeCardStatus = 'critical';
    const negativeReviewed = false;
    ctx.patchState({
      ...state,
      negativeFlagged,
      negativeCardStatus,
      negativeReviewed,
    });
  }

  @Action(DashboardActions.ResetNegativeCardCount)
  resetNegativeCardCount(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeCardCount = 0;
    ctx.patchState({
      ...state,
      negativeCardCount,
    });
  }

  @Action(DashboardActions.UnflagNegativeSnapshot)
  unflagNegativeSnapshot(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const negativeFlagged = false;
    const negativeCardStatus = 'safe';
    const negativeReviewed = true;
    ctx.patchState({
      ...state,
      negativeFlagged,
      negativeCardStatus,
      negativeReviewed,
    });
  }

  @Action(DashboardActions.FlagForbearanceSnapshot)
  flagForbearanceSnapshot(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceFlagged = true;
    const forbearanceCardStatus = 'danger';
    const forbearanceReviewed = false;
    ctx.patchState({
      ...state,
      forbearanceFlagged,
      forbearanceCardStatus,
      forbearanceReviewed,
    });
  }

  @Action(DashboardActions.UnflagForbearanceSnapshot)
  unflagForbearanceSnapshot(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const forbearanceFlagged = false;
    const forbearanceCardStatus = 'safe';
    const forbearanceReviewed = true;
    ctx.patchState({
      ...state,
      forbearanceFlagged,
      forbearanceCardStatus,
      forbearanceReviewed,
    });
  }

  @Action(DashboardActions.FlagDatabreachSnapshot)
  flagDatabreachSnapshot(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachFlagged = true;
    const databreachCardStatus = 'danger';
    const databreachReviewed = false;
    ctx.patchState({
      ...state,
      databreachFlagged,
      databreachCardStatus,
      databreachReviewed,
    });
  }

  @Action(DashboardActions.UnflagDatabreachSnapshot)
  unflagDatabreachSnapshot(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    const databreachFlagged = false;
    const databreachCardStatus = 'safe';
    const databreachReviewed = true;
    ctx.patchState({
      ...state,
      databreachFlagged,
      databreachCardStatus,
      databreachReviewed,
    });
  }

  @Action(DashboardActions.AddDatabreachCards)
  addDatabreachCards(ctx: StateContext<DashboardStateModel>, { payload }: DashboardActions.AddDatabreachCards) {
    const state = ctx.getState();
    const databreachCards = state?.databreachCards ? [...state.databreachCards, ...payload] : [...payload];
    const databreachFlagged = true;
    const databreachCardStatus = 'danger';
    const databreachReviewed = !(databreachCards.filter((c) => !c.reviewed).length > 0);
    ctx.patchState({
      ...state,
      databreachCards,
      databreachFlagged,
      databreachCardStatus,
      databreachReviewed,
    });
  }

  @Action(DashboardActions.MarkDatabreachAsReviewed)
  markDatabreachAsReviewed(
    ctx: StateContext<DashboardStateModel>,
    { payload }: DashboardActions.MarkDatabreachAsReviewed,
  ) {
    ctx.setState(
      patch({
        databreachCards: updateItem<IBreachCard>(payload, (card) => {
          return {
            ...card,
            reviewed: true,
          };
        }),
      }),
    );
    const state = ctx.getState();
    const databreachCards = state.databreachCards;
    const databreachReviewed = !(databreachCards?.filter((c) => !c.reviewed)?.length || 0 > 0);
    ctx.patchState({
      ...state,
      databreachReviewed,
    });
  }
}
