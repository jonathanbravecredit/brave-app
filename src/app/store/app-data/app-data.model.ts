import {
  AgenciesInput,
  UpdateAppDataInput,
  UserInput,
  PreferencesInput,
  NavBarInput,
} from '@shared/services/aws/api.service';

type typename = 'AppData';

export class AppDataStateModel implements UpdateAppDataInput {
  isLoaded: boolean = false;
  id: string = '';
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
  preferences?: PreferencesInput | null;
  navBar?: NavBarInput | null | undefined;
  status?: string | null;
  statusReason?: string | null;
  statusReasonDescription?: string | null;
  lastStatusModifiedOn?: string | null;
  nextStatusModifiedOn?: string | null;
}
