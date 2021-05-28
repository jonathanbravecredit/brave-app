import { State, Action, StateContext } from '@ngxs/store';
import * as AppDataActions from './app-data.actions';
import { Injectable } from '@angular/core';
import { AppData } from '@store/app-data/app-data.model';
import { OnboardingState } from '@store/onboarding';
import { UserState } from '@store/user';

export class AppDataStateModel {
  version!: string;
  loaded!: boolean;
  id!: string;
}

@State<AppDataStateModel>({
  name: 'appData',
  defaults: {
    version: 'v1',
    loaded: false,
    id: '',
  },
  children: [OnboardingState, UserState],
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
    const payload = new AppData();
    ctx.setState({
      ...state,
      ...payload,
    });
  }
}
