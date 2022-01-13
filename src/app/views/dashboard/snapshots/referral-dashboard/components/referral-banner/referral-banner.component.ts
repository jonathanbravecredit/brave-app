import { Component, Input, OnInit } from '@angular/core';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import * as moment from 'moment';

@Component({
  selector: 'brave-referral-banner',
  templateUrl: './referral-banner.component.html',
})
export class ReferralBannerComponent implements OnInit {
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  @Input() disabled: boolean | undefined;
  referredBonus: boolean = false;
  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format('YYYYMM');
    if (this.metrics.length) {
      const metric = this.metrics.find((m) => m.yearMonth == currYearMonth);
      this.referredBonus = (metric?.referrals || 0) >= 5;
    }
  }
}
