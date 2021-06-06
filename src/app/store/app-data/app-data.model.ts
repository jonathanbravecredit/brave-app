import {
  AgenciesInput,
  UpdateAppDataInput,
  UserInput,
} from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements UpdateAppDataInput {
  id: string = 'AppData';
  user?: UserInput | null | undefined;
  agencies?: AgenciesInput | null | undefined;
}
