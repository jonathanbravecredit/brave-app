import { Component, Input, OnInit } from '@angular/core';
import { IGroupedYearMonthReferral, IPayments, IReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-pure',
  templateUrl: './referral-pure.view.html',
})
export class ReferralDashboardPureView implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  @Input() payments: IPayments | undefined;
  @Input() disabled: boolean | undefined;
  private _isSuspended: boolean = false;
  set isSuspended(value: boolean) {
    this._isSuspended = value;
  }
  get isSuspended(): boolean {
    return this._isSuspended;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.referral?.referralStatus === 'suspended') {
      this.isSuspended = true;
    }
  }
}
