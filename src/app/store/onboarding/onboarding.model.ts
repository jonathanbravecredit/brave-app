import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { OnboardingInput } from '@shared/services/aws/api.service';

export interface OnboardingStep extends IProgressStep {}
type typename = 'Onboarding';
export class OnboardingStateModel implements OnboardingInput {
  lastActive: number = -1;
  lastComplete: number = -1;
  started?: boolean | null | undefined;
  abandoned?: boolean | null | undefined;
}
