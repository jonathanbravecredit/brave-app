import { Selector } from '@ngxs/store';
import { DashboardState } from '@store/dashboard/dashboard.state';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

export class DashboardSelectors {
  @Selector([DashboardState])
  static getDashboard(state: DashboardStateModel): DashboardStateModel {
    return state;
  }
}
