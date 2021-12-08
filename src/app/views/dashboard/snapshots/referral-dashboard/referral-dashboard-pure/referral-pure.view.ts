import { Component, Input, OnInit } from '@angular/core';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-pure',
  templateUrl: './referral-pure.view.html',
})
export class ReferralDashboardPureView implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() metrics: IGroupedYearMonthReferral[] = [];

  constructor() {}

  ngOnInit(): void {}
}
