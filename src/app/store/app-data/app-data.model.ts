import { Agencies, AppData, User } from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements AppData {
  __typename!: typename;
  id?: string | undefined;
  user?: User | undefined;
  agencies?: Agencies | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
