import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { APIService, GetAppDataQuery, OnUpdateAppDataSubscription } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { deleteKeyNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { IMergeReport } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DashboardInitResolver implements Resolve<IMergeReport | null> {
  constructor(
    private statesvc: StateService,
    private api: APIService,
    private store: Store,
    private creditReport: CreditreportService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMergeReport | null> {
    const id = this.statesvc.state?.appData.id;
    if (!id) {
      console.log('id is missing');
      return of(null);
    } else {
      return from(this.api.GetAppData(id)).pipe(
        map((res) => cleanBackendData(res)),
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
          return this.creditReport.getCreditReport(agencies);
        }),
      );
    }
  }
}

/**
 * Removes the '__typename' fields from query results
 * @param {GetAppDataQuery} data
 * @returns
 */
const cleanBackendData = (data: GetAppDataQuery | OnUpdateAppDataSubscription): AppDataStateModel => {
  let clean = deleteKeyNestedObject(data, '__typename');
  delete clean.createdAt; // this is a graphql managed field
  delete clean.updatedAt; // this is a graphql managed field
  delete clean.owner; // this is a graphql managed field
  return clean;
};
