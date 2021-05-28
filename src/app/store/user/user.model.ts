import {
  Onboarding,
  User,
  UserAttributes,
} from '@shared/services/aws/api.service';

type typename = 'User';

export class UserStateModel implements User {
  __typename: typename = 'User';
  id?: string;
  userAttributes?: UserAttributes;
  onboarding?: Onboarding;
}
