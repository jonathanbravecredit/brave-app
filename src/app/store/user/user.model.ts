import {
  User,
  Onboarding,
  UserAttributes,
} from '@shared/services/aws/api.service';

type typename = 'User';

export class UserStateModel implements User {
  __typename!: typename;
  id?: string | undefined;
  userAttributes?: UserAttributes | undefined;
  onboarding?: Onboarding | undefined;
}
