import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const map = this.route.snapshot.paramMap;
    window.sessionStorage.setItem(`paramMao${new Date().getMilliseconds()}`, JSON.stringify(map));
    return Auth.currentAuthenticatedUser()
      .then((res) => {
        return true;
      })
      .catch((err) => {
        this.router.navigate([routes.root.auth.signin.full]);
        return false;
      });
  }
}
