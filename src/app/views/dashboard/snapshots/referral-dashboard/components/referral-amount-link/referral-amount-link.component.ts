import { Component, Input, OnInit } from '@angular/core';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import * as moment from 'moment';

@Component({
  selector: 'brave-referral-amount-link',
  templateUrl: './referral-amount-link.component.html',
})
export class ReferralAmountLinkComponent implements OnInit {
  @Input() usersReferralLink: string = 'laDF2lk';
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  referrals: number = 0;
  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format('YYYYMM');
    if (this.metrics.length) {
      this.referrals = this.metrics.find((m) => m.yearMonth === currYearMonth)?.referrals || 0;
    }
  }
}
