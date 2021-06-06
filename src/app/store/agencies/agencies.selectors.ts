import { Selector } from '@ngxs/store';
import { AgenciesStateModel } from '@store/agencies/agencies.model';

export class AgenciesSelectors {
  @Selector([AgenciesStateModel])
  static getAgencies(state: AgenciesStateModel): AgenciesStateModel {
    return state;
  }
}
