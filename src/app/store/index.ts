import { AgenciesState } from '@store/agencies';
import { AppDataState } from '@store/app-data';
import { CreditReportState } from '@store/credit-report';
import { DashboardState } from '@store/dashboard/dashboard.state';
import { OnboardingState } from '@store/onboarding';
import { PreferencesState } from '@store/preferences';
import { ProgressTrackerState } from '@store/progress-tracker';
import { UserState } from '@store/user';

export const braveState = [
  AppDataState,
  UserState,
  OnboardingState,
  AgenciesState,
  PreferencesState,
  DashboardState,
  CreditReportState,
  ProgressTrackerState
];
