import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { OnboardingInput } from '@shared/services/aws/api.service';

export interface OnboardingStep extends IProgressStep {}

export class OnboardingStateModel implements OnboardingInput {
  lastActive: number = 0;
  lastComplete: number = -1;
  started: boolean = false;
  constructor() {}
}
