import {
  Onboarding,
  User,
  UserAttributes,
} from '@shared/services/aws/api.service';

export class UserStateModel implements User {
  [x: string]: any;
  __typename!: 'User';
  id?: string | undefined;
  userAttributes?: UserAttributes | undefined;
  onboarding?: Onboarding | undefined;
}
