import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { dashboardEnrolledContent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/content';
import { IRecommendationText } from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
import * as moment from 'moment';

@Component({
  selector: 'brave-dashboard-enrolled-pure',
  templateUrl: './dashboard-enrolled-pure.component.html',
})
export class DashboardEnrolledPureComponent implements OnInit {
  @Input() report: IMergeReport | undefined;
  @Input() cards: DashboardStateModel | undefined;
  @Input() scores: ICreditScoreTracking | undefined | null;
  @Input() trends: IGetTrendingData | undefined | null;
  @Input() metrics!: IGroupedYearMonthReferral[] | null;
  @Input() creditMix: IRecommendationText | undefined;
  @Input() creditUtilization: string | undefined;
  @Input() welcomeMsg: string | undefined = dashboardEnrolledContent.defaultMsg;
  @Input() lastUpdated: number | string | Date | undefined;
  @Input() pages!: any[];
  @Input() data: {}[] | undefined;
  @Output() negativeItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() forbearanceItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() databreachItemsClicked: EventEmitter<void> = new EventEmitter();
  @Output() fullReportClicked: EventEmitter<void> = new EventEmitter();
  @Output() disputesClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditUtilizationClicked: EventEmitter<void> = new EventEmitter();
  @Output() creditMixClicked: EventEmitter<void> = new EventEmitter();
  @Output() referralsClicked: EventEmitter<void> = new EventEmitter();
  content = dashboardEnrolledContent;
  forbearanceClicked: boolean = false;
  showDisclaimer: boolean = false;
  AnalyticClickEvents = AnalyticClickEvents;
  totalReferredAmount: number = 0;

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format('YYYYMM');
    if (this.metrics?.length) {
      const metric = this.metrics.find((m) => m.yearMonth == currYearMonth);
      this.totalReferredAmount = metric?.referrals || 0;
    }
  }

  get score(): number | undefined {
    const creditScore = this.report?.TrueLinkCreditReportType?.Borrower?.CreditScore;
    if (creditScore instanceof Array) {
      const score = creditScore.find((value) => {
        return value.scoreName.toLowerCase() === 'vantagescore3';
      });
      const _score = Math.round(score?.riskScore as number);
      if (isNaN(_score)) return;
      return _score;
    } else {
      const score = creditScore?.riskScore;
      const _score = Math.round(score as number);
      if (isNaN(_score)) return;
      return _score;
    }
  }
}
