import { Selector } from '@ngxs/store';
import {
  AppDataState,
  AppDataStateModel,
} from '@store/app-data/app-data.state';
import { AppData } from '@store/app-data/app-data.model';

export class AppDataSelectors {
  @Selector([AppDataState])
  static getAppData(state: AppDataStateModel): AppData {
    return state;
  }
}
