import { Selector } from '@ngxs/store';
import { PreferencesState, PreferencesStateModel } from '@store/preferences';

export class PreferencesSelectors {
  @Selector([PreferencesState])
  static getPreferences(state: PreferencesStateModel): PreferencesStateModel {
    return state;
  }
}
