import { PreferencesStateModel } from '@store/preferences/preferences.model';

export class Add {
  static readonly type = '[Preferences] Add';
  constructor(public payload: PreferencesStateModel) {}
}

export class Edit {
  static readonly type = '[Preferences] Edit';
  constructor(
    public payload: PreferencesStateModel | Partial<PreferencesStateModel>
  ) {}
}

export class Delete {
  static readonly type = '[Preferences] Delete';
  constructor() {}
}
