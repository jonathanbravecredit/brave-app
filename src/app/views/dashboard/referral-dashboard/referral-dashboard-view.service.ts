import { Injectable } from "@angular/core";
import { IReferral } from "../../../shared/interfaces/referrals.interface";
import { IReferralDashboardView } from "./referral-dashboard.model";
import { BehaviorSubject } from "rxjs";
import { ICampaign } from "../../../shared/interfaces/campaign.interface";
import * as _ from "lodash";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Los_Angeles");
@Injectable({
  providedIn: "root",
})
export class ReferralDashboardViewService {
  model: IReferralDashboardView = {} as IReferralDashboardView;
  model$: BehaviorSubject<IReferralDashboardView> =
    new BehaviorSubject<IReferralDashboardView>({} as IReferralDashboardView);

  constructor() {}

  mergeModel(referral: IReferral | undefined, campaign: ICampaign | undefined) {
    let modelObject: Partial<IReferralDashboardView> =
      {} as IReferralDashboardView;

    modelObject.referral = referral;
    modelObject.campaign = campaign;

    modelObject.referralLink = this.getReferralLink(referral);
    modelObject.percentage = this.getPercentage(referral, campaign);
    modelObject.earnings = this.getEarnings(referral);
    modelObject.endMonth = this.getEndMonth(campaign);
    modelObject.endDay = this.getEndDay(campaign);
    modelObject.paymentLongForm = this.getPaymentLongForm(campaign);
    modelObject.disabled = this.getDisabled(campaign);

    _.merge(this.model, modelObject);
    this.model$.next(this.model);
  }

  getReferralLink(referral: IReferral | undefined): string {
    return `https://app.brave.credit/auth/signup?referralCode=${referral?.referralCode}`;
  }

  getEarnings(referral: IReferral | undefined): number {
    return (
      (referral?.campaignActiveEarned || 0) +
      (referral?.campaignActiveBonus || 0)
    );
  }

  getPercentage(
    referral: IReferral | undefined,
    campaign: ICampaign | undefined
  ): number {
    const referred = referral?.campaignActiveReferred || 0;
    const max = campaign?.maxReferrals || 0;
    const perc = !max ? 0 : referred / max;
    return perc * 100;
  }

  getEndMonth(campaign: ICampaign | undefined): string {
    return dayjs(campaign?.endDate).format("MM");
  }

  getEndDay(campaign: ICampaign | undefined): string {
    return dayjs(campaign?.endDate).format("DD");
  }

  getPaymentLongForm(campaign: ICampaign | undefined): string {
    const payDate = dayjs(campaign?.endDate).tz();
    return payDate.format("MMMM Do");
  }

  getDisabled(campaign: ICampaign | undefined): boolean {
    return dayjs(new Date()).isAfter(campaign?.endDate);
  }
}
