import { Selector } from '@ngxs/store';
import { TransunionInput } from '@shared/services/aws/api.service';
import { AgenciesState } from '@store/agencies/agencies.state';
import { AgenciesStateModel } from '@store/agencies/agencies.model';

export class AgenciesSelectors {
  @Selector([AgenciesState])
  static getAgencies(state: AgenciesStateModel): AgenciesStateModel {
    return state;
  }

  @Selector([AgenciesState])
  static getTransunionRawQuestions(state: AgenciesStateModel): string {
    return state?.transunion?.currentRawQuestions || '';
  }

  @Selector([AgenciesState])
  static getTransunionRawAuthDetails(state: AgenciesStateModel): string {
    return state?.transunion?.currentRawAuthDetails || '';
  }

  @Selector([AgenciesState])
  static getTransunion(state: AgenciesStateModel): TransunionInput {
    return state?.transunion || ({} as TransunionInput);
  }
}
