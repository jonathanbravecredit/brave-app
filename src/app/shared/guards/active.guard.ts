import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state/state.service';
import { AppStatus } from '@shared/utils/brave/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
@Injectable({
  providedIn: 'root',
})
export class ActiveGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute, private statesvc: StateService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const {
      appData: { status },
    } = this.statesvc.state$.value;
    if (status && status !== AppStatus.Active) {
      this.router.navigate([routes.root.suspended.default.full]);
      return false;
    }
    return true;
  }
}
