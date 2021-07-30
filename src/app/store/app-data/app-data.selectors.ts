import { Selector } from '@ngxs/store';
import { AppDataStateModel } from '@store/app-data/app-data.model';
import { AppDataState } from '@store/app-data/app-data.state';

export class AppDataSelectors {
  @Selector([AppDataState])
  static getAppData(state: AppDataStateModel): AppDataStateModel {
    return state;
  }
}
