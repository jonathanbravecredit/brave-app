import { IAppData } from '@shared/interfaces/app-data.interface';

export class AppData implements IAppData {
  version: string = 'v1';
  constructor() {}
}
