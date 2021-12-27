import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  IBorrower,
  IMergeReport,
  IPublicPartition,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { PreferencesStateModel } from '@store/preferences';
import * as PreferenceActions from '@store/preferences/preferences.actions';
import { ICreditReportTradelinesCardGroup } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { Observable } from 'rxjs';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit, AfterViewInit {
  preferences$: Observable<PreferencesStateModel>;
  creditReport$: Observable<IMergeReport>;
  scores: ICreditScoreTracking | undefined;

  constructor(
    private creditReportService: CreditreportService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private transunion: TransunionService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
    this.preferences$ = this.creditReportService.preferences$;
  }

  ngOnInit(): void {
    this.transunion.getCreditScores().then((scores) => {
      this.scores = scores.data;
    });
  }

  ngAfterViewInit(): void {}

  /**
   * Handle hide event emitter from pure...hides positive accounts
   * @param {ICreditReportTradelinesCardGroup} report
   */
  onHide(report: ICreditReportTradelinesCardGroup): any {
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
    this.creditReportService.setTradeline(tradeline);
    this.router.navigate(['../report/tradeline'], { relativeTo: this.route });
  }

  /**
   * When the view public item detail button is clicked set the public item to the one clicked
   * and navigate to the detail view
   * @param publicItem
   */
  onViewPublicItemDetailClick(publicItem: IPublicPartition): void {
    this.creditReportService.setPublicItem(publicItem);
    this.router.navigate(['../report/publicitem'], { relativeTo: this.route });
  }

  /**
   * When the view personal item detail button is clicked set the personal item to the one clicked
   * and navigate to the detail view
   * @param personalItem
   */
  onViewPersonalItemDetailClick(personalItem: IBorrower): void {
    this.creditReportService.setPersonalItem(personalItem);
    this.router.navigate(['../report/personalitem'], { relativeTo: this.route });
  }
}
