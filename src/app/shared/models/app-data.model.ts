import { IAppData } from '@shared/interfaces/app-data.interface';
import { User } from '@shared/models/user.model';

export class AppData implements IAppData {
  version: string;
  user: User;

  constructor(user: User) {
    this.version = 'v1';
    this.user = user;
  }
}
