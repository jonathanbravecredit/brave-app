export interface IReferral {
  id: string;
  createdOn: string;
  modifiedOn: string;
  processingStatus: 'pending' | 'paid';
  enrollmentStatus: 'pending' | 'enrolled';
  referralCode: string;
  referredByCode: string;
  campaign?: string;
  referralStatus: 'active' | 'suspended' | undefined;
  referralApproved: boolean | undefined;
}

export interface IGetReferral {
  id: string;
}

export interface IUpdateReferral {
  id: string;
  campaign?: string;
  referralCode?: string;
  referredByCode?: string;
  enrollmentStatus?: 'pending' | 'enrolled';
  processingStatus?: 'pending' | 'paid';
}

export interface IDeleteReferral {
  id: string;
}

export interface ICreateReferral {
  id: string;
  campaign?: string;
  referredByCode?: string;
}

export interface IGroupedYearMonthReferral {
  yearMonth: number;
  referrals: number;
}

export interface IPayments {
  paymentsPending: number;
  paymentsProcessed: number;
  paymentScheduledDate: string | moment.Moment;
  currency: string;
  earningsAmount: number;
}
