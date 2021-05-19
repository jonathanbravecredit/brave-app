import { IAppData } from '@shared/interfaces/app-data.interface';
import { User } from '@shared/models/user.model';

export class AppData implements IAppData {
  version: string = 'v1';
  user: User = new User('');

  constructor() {}
}
