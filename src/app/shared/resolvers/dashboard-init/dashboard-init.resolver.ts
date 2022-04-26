import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { APIService } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMergeReport } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { BraveUtil as bc } from '@shared/utils/brave/brave';
import { AuthService } from '@shared/services/auth/auth.service';
import { AppDataSelectors } from '@store/app-data';

@Injectable({
  providedIn: 'root',
})
export class DashboardInitResolver implements Resolve<IMergeReport | null> {
  constructor(
    private auth: AuthService,
    private store: Store,
    private api: APIService,
    private statesvc: StateService,
  ) {}

  async resolve(): Promise<IMergeReport | null> {
    const id = this.statesvc.state?.appData.id;
    const sub = await this.auth.getUserSub();
    const appData = await this.store.selectOnce(AppDataSelectors.getAppData)?.toPromise();
    if (!id && !sub) {
      return new Promise((resolve) => resolve(null));
    } else if (appData.isLoaded) {
      const report = bc.parsers.parseTransunionMergeReport(appData.agencies?.transunion);
      return new Promise((resolve) => resolve(report));
    } else {
      let cred = id || sub;
      return from(this.api.GetAppData(cred))
        .pipe(
          map((res) => tu.scrubbers.scrubBackendData(res)),
          tap({
            next: (clean) => {
              this.store.dispatch(new AppDataActions.Edit({ ...clean, isLoaded: true }));
            },
            error: (err) => {
              console.error(err);
            },
          }),
          map((clean) => {
            const agencies = clean.agencies;
            if (!agencies) return null;
            return bc.parsers.parseTransunionMergeReport(agencies.transunion);
          }),
        )
        ?.toPromise();
    }
  }
}
