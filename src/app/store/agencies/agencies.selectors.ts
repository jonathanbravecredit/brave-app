import { Selector } from '@ngxs/store';
import { TransunionInput } from '@shared/services/aws/api.service';
import { AgenciesStateModel } from '@store/agencies/agencies.model';

export class AgenciesSelectors {
  @Selector([AgenciesStateModel])
  static getAgencies(state: AgenciesStateModel): AgenciesStateModel {
    return state;
  }

  @Selector([AgenciesStateModel])
  static getTransunionRawQuestions(state: AgenciesStateModel): string {
    return state.transunion?.currentRawQuestions || '';
  }

  @Selector([AgenciesStateModel])
  static getTransunionRawAuthDetails(state: AgenciesStateModel): string {
    return state.transunion?.currentRawAuthDetails || '';
  }

  @Selector([AgenciesStateModel])
  static getTransunion(state: AgenciesStateModel): TransunionInput {
    return state.transunion || ({} as TransunionInput);
  }
}
