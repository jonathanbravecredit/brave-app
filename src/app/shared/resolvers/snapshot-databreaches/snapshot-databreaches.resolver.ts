import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { DashboardSelectors } from '@store/dashboard/dashboard.selectors';
import { IBreachCard } from '@views/dashboard/data-breaches/components/data-breach-card/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnapshotDatabreachesResolver implements Resolve<IBreachCard[] | undefined> {
  constructor(private store: Store) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBreachCard[] | undefined> {
    return this.store.selectOnce(DashboardSelectors.getDashboard).pipe(
      map((value) => {
        return value.databreachCards;
      }),
    );
  }
}
