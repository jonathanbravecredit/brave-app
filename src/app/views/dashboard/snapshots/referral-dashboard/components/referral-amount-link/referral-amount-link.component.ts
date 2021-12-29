import { Component, Input, OnInit } from '@angular/core';
import { IFilledClosingAlertConfig } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';
import * as moment from 'moment';

@Component({
  selector: 'brave-referral-amount-link',
  templateUrl: './referral-amount-link.component.html',
})
export class ReferralAmountLinkComponent implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  @Input() referralApproved: Boolean = false
  referrals: number = 0;
  referralLink: string = '';
  showAlert: boolean = false;
  alertConfig: IFilledClosingAlertConfig = {
    size: 'small',
    backgroundColor: 'bg-indigo-800',
    color: 'text-white',
    alertBody: 'Copied to Clipboard!',
  };
  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format('YYYYMM');
    if (this.metrics.length) {
      this.referrals = this.metrics.find((m) => m.yearMonth === currYearMonth)?.referrals || 0;
    }
    if (this.referral) {
      this.referralLink = `https://app.brave.credit/auth/signup?referralCode=${this.referral.referralCode}`;
    }
  }

  copyUrl(el: HTMLInputElement) {
    this.showAlert = true;
    setTimeout(() => {
      this, (this.showAlert = false);
    }, 5000);
    el.select();
    document.execCommand('copy');
    el.setSelectionRange(0, 0);
  }
}
