import { AgenciesState } from '@store/agencies';
import { AppDataState } from '@store/app-data';
import { OnboardingState } from '@store/onboarding';
import { UserState } from '@store/user';

export const braveState = [
  AppDataState,
  UserState,
  OnboardingState,
  AgenciesState,
];
