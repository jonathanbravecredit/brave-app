export interface IReferral {
  id: string;
  createdOn: string;
  modifiedOn: string;
  processingStatus: 'pending' | 'paid';
  enrollmentStatus: 'pending' | 'enrolled';
  referralCode: string;
  referredByCode: string;
}

export interface IGetReferral {
  id: string;
}

export interface IUpdateReferral {
  id: string;
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
  referredByCode?: string;
}

export interface IGroupedYearMonthReferral {
  yearMonth: number;
  referrals: number;
  earnings: number;
  currency: string;
}
