import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import * as CreditReportActions from '@store/credit-report/credit-report.actions';
import * as ProgressTrackerActions from '@store/progress-tracker/progress-tracker.actions';

@Injectable({
  providedIn: 'root',
})
export class CleanUpService {
  constructor(private store: Store) {}

  clearAllState(): void {
    this.store.dispatch(new AppDataActions.Delete());
    this.store.dispatch(new CreditReportActions.Delete());
    this.store.dispatch(new ProgressTrackerActions.Delete());
  }
}
