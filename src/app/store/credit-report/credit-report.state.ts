import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as CreditReportActions from './credit-report.actions';
import { CreditReportStateModel } from '@store/credit-report/credit-report.model';
import { IMergeReport, ITrueLinkCreditReportType } from '@shared/interfaces';
import { Dayjs } from 'dayjs';

@State<CreditReportStateModel>({
  name: 'CreditReport',
  defaults: {
    report: null,
    updatedOn: '',
  },
})
@Injectable()
export class CreditReportState {
  constructor() {}

  @Action(CreditReportActions.Add)
  addCreditReport(ctx: StateContext<CreditReportStateModel>, { payload }: CreditReportActions.Add): void {
    ctx.patchState({
      ...payload,
    });
  }

  @Action(CreditReportActions.Update)
  updateCreditReport(ctx: StateContext<CreditReportStateModel>, { payload }: CreditReportActions.Update): void {
    ctx.patchState({
      ...payload,
    });
  }
}
