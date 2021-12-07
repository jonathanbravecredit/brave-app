import { Component, Input, OnInit } from '@angular/core';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-pure',
  templateUrl: './referral-pure.view.html',
})
export class ReferralDashboardPureView implements OnInit {
  @Input() referredTen: boolean = false;
  @Input() metrics: IGroupedYearMonthReferral | undefined;

  constructor() {}

  ngOnInit(): void {}
}
