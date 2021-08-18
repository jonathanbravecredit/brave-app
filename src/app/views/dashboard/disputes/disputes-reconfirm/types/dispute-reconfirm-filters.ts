import { AccountTypes } from '@shared/constants/account-types';

export type DisputeReconfirmFilter = AccountTypes | 'personal' | 'public' | 'all';
export type PersonalDisputeTypes = 'name' | 'address' | 'employer' | 'unknown';
