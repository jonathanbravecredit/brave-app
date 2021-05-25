import { User } from '@shared/models/user.model';

export interface IAppData {
  version: string;
  user: User;
}
