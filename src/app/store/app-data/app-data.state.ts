import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as AppDataActions from './app-data.actions';
import { Injectable } from '@angular/core';
import { AppData } from '@shared/models/app-data.model';

export class AppDataStateModel {
  appData: AppData | undefined;
  loaded: boolean | undefined;
}

@State<AppDataStateModel>({
  name: 'appData',
  defaults: {
    appData: new AppData(),
    loaded: false,
  },
})
@Injectable()
export class AppDataState {
  constructor() {}

  @Selector([AppDataState])
  static getAppData(state: AppDataStateModel): AppData | undefined {
    return state.appData;
  }

  @Action(AppDataActions.Delete)
  deleteDispute(
    ctx: StateContext<AppDataStateModel>,
    {}: AppDataActions.Delete
  ): void {
    const state = ctx.getState();
    const appData = new AppData();
    ctx.setState({
      ...state,
      appData,
    });
  }

  @Action(AppDataActions.Edit)
  updateDispute(
    ctx: StateContext<AppDataStateModel>,
    { payload }: AppDataActions.Edit
  ): void {
    const state = ctx.getState();
    const appData = {
      ...state,
      ...payload,
    };
    ctx.patchState({
      appData,
    });
  }

  @Action(AppDataActions.Add)
  addDispute(
    ctx: StateContext<AppDataStateModel>,
    { payload }: AppDataActions.Add
  ): void {
    const state = ctx.getState();
    const appData = payload;
    ctx.setState({
      ...state,
      appData,
    });
  }
}
