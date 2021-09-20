import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state/state.service';
import { AppStatus } from '@shared/utils/brave/constants';

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
    if (status !== AppStatus.Active) {
      this.router.navigate(['/suspended/default']);
      return false;
    }
    return true;
  }
}
