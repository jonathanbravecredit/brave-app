import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { PreferencesStateModel } from '@store/preferences';
import * as PreferenceActions from '@store/preferences/preferences.actions';
import { ICreditReportCardGroup } from '@views/credit-report/credit-report-pure/credit-report-pure.component';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit {
  preferences$: Observable<PreferencesStateModel>;
  creditReport$: Observable<IMergeReport>;

  constructor(
    private creditReportService: CreditreportService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
    this.preferences$ = this.creditReportService.preferences$;
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
        [report.group]: false,
      },
    };
    this.store.dispatch(new PreferenceActions.Edit(updated));
  }

  /**
   * When the view detail button is clicked set the tradeline to the one clicked
   * and navigate to the detail view
   * @param tradeline
   */
  onViewDetailClick(tradeline: ITradeLinePartition): void {
    console.log('updating tradeline', tradeline);
    this.creditReportService.setTradeline(tradeline);
    this.router.navigate(['../report/detail'], { relativeTo: this.route });
  }
}
