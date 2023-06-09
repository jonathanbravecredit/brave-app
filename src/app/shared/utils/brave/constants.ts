import { CreateAppDataInput } from '@shared/services/aws/api.service';
import { IBraveTechnicalError } from '@shared/utils/brave/interfaces';

export enum AppStatus {
  Active = 'active',
  Suspended = 'suspended',
  Disabled = 'disabled',
  Cancelled = 'cancelled',
}

export enum AppStatusReason {
  Default = 'default',
  Active = 'active',
  AgeRestriction = 'ageRestriction',
  NinetyDayInactive = 'ninetyDayInactive',
  ThirtyDayLockout = 'thirtyDayLockout',
  AuthAttemptsExceeded = 'authAttemptsExceeded',
  PinRequestsExceeded = 'pinRequestExceeded',
  PinAttemptsExceeded = 'pinAttemptsExceeded',
  PinAgeExceeded = 'pinAgeExceeded',
  KbaAttemptsExceeded = 'kbaAttemptsExceeded',
  KbaIncorrect = 'kbaIncorrect',
  KbaAgeExceeded = 'kbaAgeExceeded',
  EnrollmentFailed = 'enrollmentFailed',
}

export const AppStatusReasonDescriptions: Record<string, string> = {
  [AppStatusReason.Default]: `Default status provided when user signs up`,
  [AppStatusReason.Active]: `Account in good standing and active within 90 days`,
  [AppStatusReason.AgeRestriction]: `Account is suspended as they are under 18 years of age`,
  [AppStatusReason.NinetyDayInactive]: `Account disabled after 90 days of inactivity`,
  [AppStatusReason.ThirtyDayLockout]: `Account suspended for 30 days for inappropriate responses to Transunion`,
  [AppStatusReason.AuthAttemptsExceeded]: `Account suspended for 30 days for exceeding the number of auth attempts`,
  [AppStatusReason.PinRequestsExceeded]: `Account disabled for 30 days for exceeding the number of pin reset requests`,
  [AppStatusReason.PinAttemptsExceeded]: `Account disabled for 30 days for exceeding the number of pin attempts`,
  [AppStatusReason.PinAgeExceeded]: `Account disabled for 30 days for allowing the pin to expire after 15 minutes`,
  [AppStatusReason.KbaAttemptsExceeded]: `Account disabled for 30 days for getting kba questions incorrect`,
  [AppStatusReason.KbaIncorrect]: `Account disabled for 30 days for exceeding the number of kba attempts`,
  [AppStatusReason.KbaAgeExceeded]: `Account disabled for 30 days for allowing the kba questions to expire after 96 hours`,
  [AppStatusReason.EnrollmentFailed]: `Non-specific enrollment failure`,
};

export const INIT_ONBOARDING_STATE: {
  lastActive: number;
  lastComplete: number;
  started: boolean;
  abandoned: boolean;
} = {
  lastActive: 0,
  lastComplete: -1,
  started: true,
  abandoned: false,
};

export const INIT_DATA: CreateAppDataInput = {
  id: '',
  user: {
    id: '',
    onboarding: {
      lastActive: 0,
      lastComplete: -1,
      started: true,
      abandoned: false,
    },
  },
  agencies: {
    transunion: { authenticated: false, authAttempt: 0 },
    experian: { authenticated: false },
    equifax: { authenticated: false },
  },
  preferences: {
    showAllAccounts: {
      creditCards: true,
      collectionsAccounts: true,
      installmentLoans: true,
      mortgages: true,
    },
  },
  status: AppStatus.Active,
  statusReason: AppStatusReason.Active,
  statusReasonDescription: AppStatusReasonDescriptions[AppStatusReason.Active],
  navBar: {
    disputes: {
      badge: true,
    },
  },
};

export const BRAVE_TECHNICAL_ERROR: IBraveTechnicalError = {
  success: false,
  error: { Code: -1 },
};
