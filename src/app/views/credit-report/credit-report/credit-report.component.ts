import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { PreferencesStateModel } from '@store/preferences';
import * as PreferenceActions from '@store/preferences/preferences.actions';
import { ICreditReportCardGroup } from '@views/credit-report/credit-report-pure/credit-report-pure.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit {
  preferences$: Observable<PreferencesStateModel>;
  creditReport$: Observable<IMergeReport>;

  constructor(
    private creditReportService: CreditreportService,
    private store: Store
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.pipe();
    this.preferences$ = this.creditReportService.preferences$.pipe();
  }

  ngOnInit(): void {}

  /**
   * Handle hide event emitter from pure...hides positive accounts
   * @param {ICreditReportCardGroup} report
   */
  onHide(report: ICreditReportCardGroup): any {
    // I need to update the state
    const prefs = this.creditReportService.tuPreferences;
    const updated: PreferencesStateModel = {
      ...prefs,
      showAllAccounts: {
        ...prefs.showAllAccounts,
        [report.group]: true,
      },
    };
    this.store.dispatch(new PreferenceActions.Edit(updated));
  }
}
