import { Component, Input, OnInit } from "@angular/core";
import { IFilledClosingAlertConfig } from "@shared/components/alerts/filled-closing-alert/filled-closing-alert.component";
import { ICampaign } from "@shared/interfaces/campaign.interface";
import { IReferral } from "@shared/interfaces/referrals.interface";
import { REFERRAL_DASHBOARD_CONTENT } from "../../referral-dashboard.content";

@Component({
  selector: "brave-referral-amount-link",
  templateUrl: "./referral-amount-link.component.html",
})
export class ReferralAmountLinkComponent implements OnInit {
  REFERRAL_DASHBOARD_CONTENT = REFERRAL_DASHBOARD_CONTENT;

  @Input() referral: IReferral | undefined;
  @Input() campaign: ICampaign | undefined;
  @Input() disabled: boolean | undefined;
  referralLink: string = "";
  showAlert: boolean = false;
  alertConfig: IFilledClosingAlertConfig = {
    size: "small",
    backgroundColor: "bg-indigo-800",
    color: "text-white",
    alertBody: "Copied to Clipboard!",
  };

  get percentage(): number {
    const referred = this.referral?.campaignActiveReferred || 0;
    const max = this.campaign?.maxReferrals || 0;
    const perc = !max ? 0 : referred / max;
    return perc * 100;
  }

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
    document.execCommand("copy");
    el.setSelectionRange(0, 0);
  }
}
