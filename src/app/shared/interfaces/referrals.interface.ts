export interface IReferral {
  id: string;
  referralCode: string;

  referredByCode: string | null | undefined;
  referredById: string | undefined;
  referredByEmail: string | undefined;

  eligible: 0 | 1;

  baseEarned: number;
  bonusEarned: number;
  addOnEarned: number;

  campaignActive: string;
  campaignActiveReferred: number;
  campaignActiveEarned: number;
  campaignActivePaid: number;
  campaignActiveAddOn: number;

  campaignPrior: string;
  campaignPriorReferred: number;
  campaignPriorEarned: number;
  campaignPriorPaid: number;
  campaignPriorAddOn: number;

  nextPaymentDate: string;
  notified: boolean;
  createdOn: string | undefined;
  modifiedOn: string | undefined;
}

export interface IGetReferral {
  id: string;
}

export interface ICreateReferral {
  id: string;
  referredByCode?: string;
}
