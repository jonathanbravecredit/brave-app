// Inside the root 'index.ts' file of our store, eg - store/index.ts
import { AppDataState } from '@store/app-data/app-data.state';
import { OnboardingState } from '@store/onboarding/onboarding.state';

// Still allow other modules to take what they need, eg action & selectors
export * from './onboarding';

// rolls up our states into one const
export const ecologyState = [AppDataState, OnboardingState];
