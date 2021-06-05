import {
  OnboardingInput,
  UserAttributesInput,
  UserInput,
} from '@shared/services/aws/api.service';

export class UserStateModel implements UserInput {
  id!: string;
  userAttributes?: UserAttributesInput | null | undefined;
  onboarding?: OnboardingInput | null | undefined;
}
