import { State, Action, StateContext } from '@ngxs/store';
import * as AppDataActions from './app-data.actions';
import { Injectable } from '@angular/core';
import { AppData } from '@store/app-data/app-data.model';

export class AppDataStateModel {
  appData!: AppData;
  loaded!: boolean;
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

  @Action(AppDataActions.Add)
  addAppData(
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

  @Action(AppDataActions.Edit)
  updateAppData(
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

  @Action(AppDataActions.Delete)
  deleteAppData(
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
}
