import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@shared/services/auth/auth.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
@Injectable({
  providedIn: 'root',
})
export class UnconfirmedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // if (!this.authService?.user?.isSignedIn) {
    //   this.router.navigate([routes.root.auth.signin.full]);
    //   return false;
    // }
    // return true;
  }
}
