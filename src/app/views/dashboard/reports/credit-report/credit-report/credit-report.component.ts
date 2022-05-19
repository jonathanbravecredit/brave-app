import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import {
  IBorrower,
  IMergeReport,
  IPublicPartition,
  ITradeLinePartition,
} from "@shared/interfaces/merge-report.interface";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { PreferencesStateModel } from "@store/preferences";
import * as PreferenceActions from "@store/preferences/preferences.actions";
import { ICreditReportTradelinesCardGroup } from "@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component";
import { Observable, Subscription } from "rxjs";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { ICreditScoreTracking } from "@shared/interfaces/credit-score-tracking.interface";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { ProgressTrackerViewService } from "../../../progress-tracker/progress-tracker-view.service";
import { IProgressTrackerView } from "../../../progress-tracker/progress-tracker.model";

@Component({
  selector: "brave-credit-report",
  templateUrl: "./credit-report.component.html",
})
export class CreditReportComponent implements OnInit, OnDestroy {
  preferences$: Observable<PreferencesStateModel>;
  creditReport$: Observable<IMergeReport>;
  scores: ICreditScoreTracking | undefined;
  model: IProgressTrackerView = {} as IProgressTrackerView;
  modelSub$: Subscription | undefined;

  constructor(
    private creditReportService: CreditreportService,
    private store: Store,
    private router: Router,
    private transunion: TransunionService,
    public progressTrackerViewService: ProgressTrackerViewService
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
    this.preferences$ = this.creditReportService.preferences$;
    this.modelSub$ = progressTrackerViewService.model$.subscribe((res) => {
      this.model = res;
      this.checkInitiativeTasks();
    });
  }

  ngOnInit(): void {
    this.transunion.getCreditScores().then((scores) => {
      this.scores = scores.data;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }

  checkInitiativeTasks() {
    this.model?.initiativeTasks?.forEach((t) => {
      t.subTasks?.forEach((v) => {
        if (v.taskId === "review_report" && v.taskStatus !== "complete") {
          this.progressTrackerViewService.updateProgressTrackerData({
            parentId: v.parentId,
            taskId: v.taskId,
            taskStatus: "complete",
          });
        }
      });
    });
  }

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
    this.router.navigate([routes.root.dashboard.report.tradeline.full]);
  }

  /**
   * When the view public item detail button is clicked set the public item to the one clicked
   * and navigate to the detail view
   * @param publicItem
   */
  onViewPublicItemDetailClick(publicItem: IPublicPartition): void {
    this.creditReportService.setPublicItem(publicItem);
    this.router.navigate([routes.root.dashboard.report.publicitem.full]);
  }

  /**
   * When the view personal item detail button is clicked set the personal item to the one clicked
   * and navigate to the detail view
   * @param personalItem
   */
  onViewPersonalItemDetailClick(personalItem: IBorrower): void {
    this.creditReportService.setPersonalItem(personalItem);
    this.router.navigate([routes.root.dashboard.report.personalitem.full]);
  }
}
