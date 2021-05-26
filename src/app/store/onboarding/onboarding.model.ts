import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';

export interface OnboardingStep extends IProgressStep {}

export class Onboarding {
  started: boolean = false;
  steps: OnboardingStep[] = [];
  constructor() {}
}
