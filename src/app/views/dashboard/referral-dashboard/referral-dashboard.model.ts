import { ICampaign } from "../../../shared/interfaces/campaign.interface";
import { IReferral } from "../../../shared/interfaces/referrals.interface";
export interface IReferralDashboardView {
  referral: IReferral | undefined;
  campaign: ICampaign | undefined;
  isSuspended: boolean;
  referralLink: string;
  disabled: boolean;
  percentage: number;
  endMonth: string;
  endDay: string;
  paymentLongForm: string;
  earnings: number
}
