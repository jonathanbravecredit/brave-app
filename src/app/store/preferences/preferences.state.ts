import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import * as PreferencesActions from './preferences.actions';
import { PreferencesStateModel } from '@store/preferences/preferences.model';
import { CreditReportGroups } from '@shared/constants/credit-report';

@State<PreferencesStateModel>({
  name: 'preferences',
  defaults: {
    showAllAccounts: {
      [CreditReportGroups.CreditCards]: true,
      [CreditReportGroups.CollectionsAccounts]: true,
      [CreditReportGroups.InstallmentLoans]: true,
      [CreditReportGroups.Mortgages]: true,
    },
  },
})
@Injectable()
export class PreferencesState {
  constructor() {}

  @Action(PreferencesActions.Add)
  addUser(ctx: StateContext<PreferencesStateModel>, { payload }: PreferencesActions.Add) {
    const state = ctx.getState();
    ctx.patchState({
      ...payload,
    });
  }

  @Action(PreferencesActions.Edit)
  updateUser(ctx: StateContext<PreferencesStateModel>, { payload }: PreferencesActions.Edit) {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(PreferencesActions.Delete)
  deleteUser(ctx: StateContext<PreferencesStateModel>) {
    const payload = new PreferencesStateModel();
    ctx.patchState({
      ...payload,
    });
  }
}
