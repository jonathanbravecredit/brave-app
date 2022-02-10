import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { IAdData } from '@shared/interfaces/ads.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DashboardService, IDashboardData } from '@shared/services/dashboard/dashboard.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { dashboardEnrolledContent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content';
import { IRecommendationText } from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnDestroy {
  @Input() adsData: IAdData[] | undefined;
  @Input() referral: IReferral | null | undefined;
  @Input() rating: string | undefined;
  @Input() creditMix: IRecommendationText | undefined;
  @Input() creditMixStatus: string | undefined;
  @Input() creditUtilizationStatus: string | undefined;
  @Input() creditUtilizationPerc: number | undefined;

  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  @Output() disputesClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditUtilizationClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditMixClicked: EventEmitter<void> = new EventEmitter();
  @Output() referralsClicked: EventEmitter<void> = new EventEmitter();

  public score: number = 4;
  public welcome: string = '';
  public updatedAt: string;

  public content = dashboardEnrolledContent;
  public forbearanceClicked: boolean = false;
  public showDisclaimer: boolean = false;
  public AnalyticClickEvents = AnalyticClickEvents;

  public dashboardData$ = new BehaviorSubject<IDashboardData | null>(null);
  private dashboardDataSub$: Subscription | undefined;

  constructor(private dashboardService: DashboardService, public featureflags: FeatureFlagsService) {
    this.dashboardDataSub$ = combineLatest([
      this.dashboardService.dashReport$,
      this.dashboardService.dashSnapshots$,
      this.dashboardService.dashTrends$,
      this.dashboardService.dashScores$,
      this.dashboardService.dashScore$,
      this.dashboardService.dashScoreSuppressed$,
    ])
      .subscribe((val) => {
        this.dashboardData$?.next({
          dashReport: val[0],
          dashSnapshots: val[1],
          dashTrends: val[2],
          dashScores: val[3],
          dashScore: val[4],
          dashScoreSuppressed: val[5],
        });
      });
    this.updatedAt = this.dashboardService.getLastUpdated() || new Date().toISOString();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dashboardDataSub$?.unsubscribe();
  }

  setWelcomeMessage(): void {
    this.welcome = this.dashboardService.getWelcomeMessage();
  }
}
