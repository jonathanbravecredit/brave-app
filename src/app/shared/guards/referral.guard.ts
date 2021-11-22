import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

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
    return Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        this.router.navigate(['/auth/signin']);
        return false;
      });
  }
}
