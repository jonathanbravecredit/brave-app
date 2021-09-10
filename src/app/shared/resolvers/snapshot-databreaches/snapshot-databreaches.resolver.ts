import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { AgenciesStateModel } from '@store/agencies';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnapshotDatabreachesResolver implements Resolve<IMergeReport> {
  constructor(private creditReport: CreditreportService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMergeReport> {
    const agencies$ = this.creditReport.agencies$;
    return agencies$.pipe(
      take(1),
      map((agencies: AgenciesStateModel) => {
        return this.creditReport.getCreditReport(agencies);
      }),
    );
  }
}
