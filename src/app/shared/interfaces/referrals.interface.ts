export interface IReferral {
  id: string;
  referralCode: string;

  referredByCode: string | null | undefined;
  referredById: string | undefined;
  referredByEmail: string | undefined;

  eligible: 0 | 1;
  suspended: boolean;
  enrolled: boolean;

  totalReferred: number;
  totalEarned: number;
  totalBonus: number;
  totalAddOn: number;

  campaignActive: string;
  campaignActiveReferred: number;
  campaignActiveEarned: number;
  campaignActivePaid: number;
  campaignActiveAddOn: number;
  campaignActiveBonus: number;

  campaignPrior: string;
  campaignPriorReferred: number;
  campaignPriorEarned: number;
  campaignPriorPaid: number;
  campaignPriorAddOn: number;
  campaignPriorBonus: number;

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
