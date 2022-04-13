import { Component, Input, OnInit } from '@angular/core';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ICampaign } from '@shared/interfaces/campaign.interface';

@Component({
  selector: 'brave-referral-pure',
  templateUrl: './referral-pure.view.html',
})
export class ReferralDashboardPureView implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() campaign: ICampaign | undefined;
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
    this.isSuspended = this.referral?.suspended || false;
  }
}