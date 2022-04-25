import { ICampaign } from '@shared/interfaces/campaign.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';

export interface DashboardReferralGauge {
  referral: IReferral | null;
  campaign: ICampaign | null;
}
