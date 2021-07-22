import { Injectable } from '@angular/core';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { dateDiffInDays } from '@shared/utils/dates';

@Injectable()
export class DashboardService {
  constructor(private statesvc: StateService, private transunion: TransunionService) {}

  async refreshReport(): Promise<void> {
    const id = this.statesvc.state?.appData?.id;
    if (!id) throw `dashboardService:refreshReport=Missing ID`;
    const fulfilledOn = this.statesvc.state?.appData.agencies?.transunion?.fulfilledOn;
    if (!fulfilledOn) {
      await this.transunion.refreshCreditReport(id);
      return;
    }
    const now = new Date();
    const last = new Date(fulfilledOn);
    const refresh = dateDiffInDays(last, now) > 0 ? true : false;
    if (refresh) {
      await this.transunion.refreshCreditReport(id);
    }
    return;
  }
}
