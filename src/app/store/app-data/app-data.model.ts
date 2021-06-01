import { Agencies, AppData, User } from '@shared/services/aws/api.service';
import { UserStateModel } from '@store/user';

type typename = 'AppData';

export class AppDataStateModel implements AppData {
  __typename: typename = 'AppData';
  id?: string;
  user?: UserStateModel;
  agencies?: Agencies;
  createdAt?: string;
  updatedAt?: string;
}
