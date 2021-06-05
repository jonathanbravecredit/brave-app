import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Onboarding } from '@shared/services/aws/api.service';

export interface OnboardingStep extends IProgressStep {}
type typename = 'Onboarding';
export class OnboardingStateModel implements Onboarding {
  __typename!: typename;
  lastActive?: number | undefined;
  lastComplete?: number | undefined;
  started?: boolean | null | undefined;
}
