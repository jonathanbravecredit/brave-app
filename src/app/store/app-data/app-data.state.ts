import { State, Action, StateContext } from '@ngxs/store';
import * as AppDataActions from './app-data.actions';
import { Injectable } from '@angular/core';
import { AppDataStateModel } from '@store/app-data/app-data.model';
import { UserState } from '@store/user';
import { AgenciesState } from '@store/agencies';

@State<AppDataStateModel>({
  name: 'appData',
  defaults: {
    id: '',
  },
  children: [UserState, AgenciesState],
})
@Injectable()
export class AppDataState {
  constructor() {}

  @Action(AppDataActions.Add)
  addAppData(
    ctx: StateContext<AppDataStateModel>,
    { payload }: AppDataActions.Add
  ): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AppDataActions.Edit)
  updateAppData(
    ctx: StateContext<AppDataStateModel>,
    { payload }: AppDataActions.Edit
  ): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(AppDataActions.Delete)
  deleteAppData(
    ctx: StateContext<AppDataStateModel>,
    {}: AppDataActions.Delete
  ): void {
    const state = ctx.getState();
    const payload = new AppDataStateModel();
    ctx.setState({
      ...state,
      ...payload,
    });
  }
}
