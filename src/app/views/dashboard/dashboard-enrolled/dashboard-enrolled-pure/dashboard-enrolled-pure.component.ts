import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { IAdData } from '@shared/interfaces/ads.interface';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DashboardService, IDashboardData } from '@shared/services/dashboard/dashboard.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { dashboardEnrolledContent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content';
import { IRecommendationText } from '@views/dashboard/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { filter, skip } from 'rxjs/operators';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnDestroy {
  modalOpen: boolean = true;
  updatedOnSub$: Subscription | undefined;

  @Input() adsData: IAdData[] | undefined;
  @Input() referral: IReferral | null | undefined;
  @Input() rating: string | undefined;
  @Input() creditMix: IRecommendationText | undefined;
  @Input() creditMixStatus: string | undefined;
  @Input() creditUtilizationStatus: string | undefined;
  @Input() creditUtilizationPerc: number | undefined;
  @Input() initiative: Initiative | null = null;
  @Input() initiativeSteps: ICircleProgressStep[] = [];
  @Input() futureScore: number = 0;

  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  @Output() disputesClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditUtilizationClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditMixClicked: EventEmitter<void> = new EventEmitter();
  @Output() referralsClicked: EventEmitter<void> = new EventEmitter();
  @Output() onProgressTrackerClicked: EventEmitter<void> = new EventEmitter();

  public score: number = 4;
  public welcome: string = '';
  public updatedAt: string = new Date().toISOString();
  public content = dashboardEnrolledContent;
  public forbearanceClicked: boolean = false;
  public showDisclaimer: boolean = false;
  public AnalyticClickEvents = AnalyticClickEvents;
  public dashboardData$ = new BehaviorSubject<IDashboardData | null>(null);
  public dashboardDataSub$: Subscription | undefined;

  constructor(private dashboardService: DashboardService, public featureflags: FeatureFlagsService) {
    this.dashboardDataSub$ = combineLatest([
      this.dashboardService.dashReport$,
      this.dashboardService.dashSnapshots$,
      this.dashboardService.dashTrends$,
      this.dashboardService.dashScores$,
      this.dashboardService.dashScore$,
      this.dashboardService.dashScoreSuppressed$,
    ]).subscribe((val) => {
      this.dashboardData$?.next({
        dashReport: val[0],
        dashSnapshots: val[1],
        dashTrends: val[2],
        dashScores: val[3],
        dashScore: val[4],
        dashScoreSuppressed: val[5],
      });
    });

    this.updatedOnSub$ = this.dashboardService.updatedOn$.subscribe((u) => {
      this.updatedAt = u || new Date().toISOString();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dashboardDataSub$?.unsubscribe();
  }

  setWelcomeMessage(): void {
    this.welcome = this.dashboardService.getWelcomeMessage();
  }

  toggleGoalChoiceModel() {
    this.modalOpen = !this.modalOpen;
  }
}
