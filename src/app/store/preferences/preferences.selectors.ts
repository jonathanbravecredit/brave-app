import { Selector } from '@ngxs/store';
import { PreferencesStateModel } from '@store/preferences/preferences.model';
import { PreferencesState } from '@store/preferences/preferences.state';

export class PreferencesSelectors {
  @Selector([PreferencesState])
  static getPreferences(state: PreferencesStateModel): PreferencesStateModel {
    return state;
  }
}
