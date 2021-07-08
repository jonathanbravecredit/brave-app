import { Selector } from '@ngxs/store';
import { AppDataState } from '@store/app-data';
import { AppDataStateModel } from '@store/app-data/app-data.model';

export class AppDataSelectors {
  @Selector([AppDataState])
  static getAppData(state: AppDataStateModel): AppDataStateModel {
    return state;
  }
}
