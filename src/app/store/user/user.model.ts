import {
  UserInput,
  OnboardingInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';

type typename = 'User';

export class UserStateModel implements UserInput {
  id!: string;
  userAttributes?: UserAttributesInput | null | undefined;
  onboarding?: OnboardingInput | null | undefined;
}
