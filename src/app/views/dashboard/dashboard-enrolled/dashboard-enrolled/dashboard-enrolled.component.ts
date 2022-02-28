import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { DashboardStateModel, DashboardStatus } from '@store/dashboard/dashboard.model';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { BraveUtil } from '@shared/utils/brave/brave';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { Observable, Subscription } from 'rxjs';
import { IAdData } from '@shared/interfaces/ads.interface';
import { shuffle } from 'lodash';
import { IDashboardResolver } from '@shared/resolvers/dashboard/dashboard.resolver';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { IMergeReport } from '@shared/interfaces';
import { Store } from '@ngxs/store';
import { CreditReportSelectors, CreditReportStateModel } from '@store/credit-report';
import { filter } from 'rxjs/operators';
import { ProgressTrackerSelectors, ProgressTrackerStateModel } from '@store/progress-tracker';
import { Initiative, InitiativeSubTask, InitiativeTask } from '@shared/interfaces/progress-tracker.interface';
import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';

@Component({
  selector: 'brave-dashboard-enrolled',
  templateUrl: './dashboard-enrolled.component.html',
})
export class DashboardEnrolledComponent implements OnDestroy {
  // is credit report suppressed
  suppressed: boolean = false;
  // snapshots and analysis
  snapshots: DashboardStateModel | undefined;
  rating: string | undefined;
  creditMix: IRecommendationText | undefined;
  creditMixStatus: string | undefined;
  creditUtilizationStatus: string | undefined;
  creditUtilizationPerc: number | undefined;
  creditMixSummary: ICreditMixTLSummary | undefined;
  // tu data
  // report: IMergeReport | undefined;
  referral: IReferral | null | undefined;
  trends!: IGetTrendingData | null;
  trendingScores: IProductTrendingData[] = [];
  sortedScores!: IProductTrendingData[] | null;
  // ad data for carousel
  adsData$: Observable<IAdData[]> | undefined;
  adsData: IAdData[] | undefined;
  // sub to router
  routeSub$: Subscription | undefined;
  report: IMergeReport | null = null;
  // initiative: Initiative | null = null;
  private report$: Observable<CreditReportStateModel> = this.store.select(CreditReportSelectors.getCreditReport);
  private reportSub$: Subscription | undefined;
  initiative: Initiative = this.store.selectSnapshot((state) => state.ProgressTracker).data;
  enrolledScore: string | undefined = this.store.selectSnapshot((state) => state.appData).agencies?.transunion
    ?.enrollVantageScore.serviceProductValue;
  private initiativeSub$: Subscription | undefined;
  initiativeSteps: IProgressStep[] = [];
  futureScore: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private creditMixService: CreditMixService,
    private creditUtilizationService: CreditUtilizationService,
    private store: Store,
  ) {
    this.subscribeToReportData();
    this.subscribeToRouteData();
    this.setProgressTrackerDataInDashboardService();
    this.setAdData();
    this.createSteps();
    this.findFutureScore();
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
    this.reportSub$?.unsubscribe();
    this.initiativeSub$?.unsubscribe();
  }

  subscribeToReportData(): void {
    this.reportSub$ = this.report$
      .pipe(filter((creditReportData: CreditReportStateModel) => creditReportData !== undefined))
      .subscribe((creditReportData: CreditReportStateModel) => {
        this.report = creditReportData.report;
        if (this.report) {
          this.dashboardService.dashReport$.next(this.report);
          this.dashboardService.dashScoreSuppressed$.next(TransunionUtil.queries.report.isReportSupressed(this.report));
        }
      });
  }

  setProgressTrackerDataInDashboardService() {
    if (this.initiative) {
      this.dashboardService.progressTrackerData$.next(this.initiative);
    }
  }

  createSteps() {
    this.initiativeSteps = [];
    if (this.initiative?.initiativeTasks && this.initiative?.initiativeTasks.length > 1) {
      this.initiative?.initiativeTasks?.forEach((primaryTask: InitiativeTask, i: number) => {
        this.initiativeSteps.push({
          id: i,
          active: true,
          complete: primaryTask.taskStatus === 'complete',
          name: primaryTask.taskLabel,
        });
      });
    } else {
      if (this.initiative?.initiativeTasks) {
        this.initiative?.initiativeTasks[0]?.subTasks?.forEach((subTask: InitiativeSubTask, i: number) => {
          this.initiativeSteps.push({
            id: i,
            active: true,
            complete: subTask.taskStatus === 'complete',
            name: subTask.taskLabel,
          });
        });
      }
    }
  }

  findFutureScore() {
    this.initiative?.initiativeTasks?.forEach((initiativeTasks: InitiativeTask) => {
      let res = initiativeTasks.subTasks?.reduce((total: number, subTask: InitiativeSubTask) => {
        return total + +subTask.taskCard?.metric;
      }, 0);
      this.futureScore += res ? res : 0;
    });
    if (this.enrolledScore) {
      this.futureScore += +this.enrolledScore;
    } else {
      this.futureScore = 0;
    }
  }

  subscribeToRouteData(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      // these are key data sources
      const { snapshots, trends, referral } = resp.dashboard as IDashboardResolver;

      if (snapshots) this.dashboardService.dashSnapshots$.next(snapshots);
      if (trends) this.dashboardService.dashTrends$.next(trends);
      if (trends) this.dashboardService.dashScores$.next(BraveUtil.parsers.parseTransunionTrendingData(trends));

      // check referral progress if active
      this.referral = referral;
      // for the credit mix
      const tradelines = TransunionUtil.queries.report.listTradelines(this.report);
      this.creditMixSummary = this.creditMixService.getTradelineSummary(tradelines);
      this.creditMix = this.creditMixService.getRecommendations(this.creditMixSummary);
      this.creditMixStatus = this.creditMixService.mapCreditMixSnapshotStatus(this.creditMix?.rating || 'fair');
      this.rating = this.creditMixService.getRecommendations(this.creditMixSummary)?.rating;
      // for the credit utilization
      const creditUtilSnapshotObj = this.creditUtilizationService.getCreditUtilizationSnapshotStatus(tradelines);
      this.creditUtilizationStatus = creditUtilSnapshotObj.status;
      this.creditUtilizationPerc = creditUtilSnapshotObj.perc;
    });
  }

  setAdData(): void {
    this.dashboardService.getAdData().then((resp: any) => {
      this.adsData = shuffle(resp);
    });
  }

  onNegativeItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      negativeReviewed: true,
      negativeStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.report.snapshot.negative.full]);
  }

  onForbearanceItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      forbearanceReviewed: true,
      forbearanceStatus: DashboardStatus.Stale,
    });
    this.router.navigate([routes.root.dashboard.report.snapshot.forbearance.full]);
  }

  onDatabreachItemsClicked() {
    this.dashboardService.syncDashboardStateToDB({
      databreachStatus: DashboardStatus.Stale,
    }); // not updating reviewed bc user needs to review all cards
    this.router.navigate([routes.root.dashboard.report.snapshot.databreach.full]);
  }

  onFullReportClicked() {
    this.router.navigate([routes.root.dashboard.report.full]);
  }

  onDisputesClicked() {
    this.router.navigate([routes.root.dashboard.disputes.full]);
  }

  onCreditUtilizationClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.creditutilization.full]);
  }

  onCreditMixClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.creditmix.full]);
  }

  onReferralsClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.referrals.full]);
  }

  onProgressTrackerClicked() {
    this.router.navigate([routes.root.dashboard.report.snapshot.progressTracker.full]);
  }
}
