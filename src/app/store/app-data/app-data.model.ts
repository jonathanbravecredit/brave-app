import { Agencies, AppData, User } from '@shared/services/aws/api.service';

export class AppDataStateModel implements AppData {
  __typename!: 'AppData';
  user?: User | undefined;
  agencies?: Agencies | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
