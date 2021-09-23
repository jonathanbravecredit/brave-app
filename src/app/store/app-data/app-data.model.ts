import { AgenciesInput, UpdateAppDataInput, UserInput, PreferencesInput } from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements UpdateAppDataInput {
  id: string = '';
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
  preferences?: PreferencesInput | null;
  status?: string | null;
  statusReason?: string | null;
  statusReasonDescription?: string | null;
  lastStatusModifiedOn?: string | null;
  nextStatusModifiedOn?: string | null;
}
