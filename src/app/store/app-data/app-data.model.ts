import {
  AgenciesInput,
  UpdateAppDataInput,
  UserInput,
  UpdateDisputeInput,
  PreferencesInput,
} from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements UpdateAppDataInput {
  id: string = '';
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
  preferences?: PreferencesInput | null;
  disputes?: UpdateDisputeInput[] | null;
}
