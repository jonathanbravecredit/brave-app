export interface ICampaign {
  pKey: number;
  version: number;
  currentVersion: number;
  campaign: string;
  denomination: number;
  maxReferrals: number;
  bonusThreshold: number;
  bonusAmount: number;
  addOnFlagOne: string;
  addOnFlagTwo: string;
  addOnFlagThree: string;
  startDate: string;
  endDate: string;
  createdOn: string | undefined;
  modifiedOn: string | undefined;
}
