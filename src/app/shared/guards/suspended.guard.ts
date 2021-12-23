import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from "@angular/router";
import { Observable } from "rxjs";
import Auth from "@aws-amplify/auth";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
@Injectable({
  providedIn: "root",
})
export class SuspendedGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // return Auth.currentAuthenticatedUser({ bypassCache: true })
    //   .then((res) => {
    //     return true;
    //   })
    //   .catch((err) => {
    //     this.router.navigate([routes.root.children.auth.children.signin.full]);
    //     return false;
    //   });
  }
}
