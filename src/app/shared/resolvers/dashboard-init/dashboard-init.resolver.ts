import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { APIService } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMergeReport } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { BraveUtil as bc } from '@shared/utils/brave/brave';
import { AuthService } from '@shared/services/auth/auth.service';

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

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IMergeReport | null> {
    const id = this.statesvc.state?.appData.id;
    const sub = await this.auth.getUserSub();
    console.log('id ==> ', id);
    console.log('sub ==> ', sub);
    if (!id && !sub) {
      return new Promise((resolve) => resolve(null));
    } else {
      let cred = id || sub;
      return from(this.api.GetAppData(cred))
        .pipe(
          map((res) => tu.scrubbers.scrubBackendData(res)),
          tap({
            next: (clean) => {
              this.store.dispatch(new AppDataActions.Edit(clean));
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
        .toPromise();
    }
  }
}
