import { Component, Input, OnInit } from '@angular/core';
import { IFilledClosingAlertConfig } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { IReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-amount-link',
  templateUrl: './referral-amount-link.component.html',
})
export class ReferralAmountLinkComponent implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() disabled: boolean | undefined;
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
