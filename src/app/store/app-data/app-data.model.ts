import { AgenciesInput, UpdateAppDataInput, UserInput, PreferencesInput } from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements UpdateAppDataInput {
  id: string = '';
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
  preferences?: PreferencesInput | null;
}
