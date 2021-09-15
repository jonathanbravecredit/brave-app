import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';

import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class KycDeactivateGuard implements CanDeactivate<KycBaseComponent> {
  constructor() {}
  canDeactivate(
    component: KycBaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger;
    console.log('in deactivate guard');
    console.log('component.form ===> ', component.form);
    console.log('canDeactivate comp ===> ', component.canDeactivate(component.form));
    console.log('!canDeactivate comp ===> ', !component.canDeactivate(component.form));
    if (!component.canDeactivate(component.form)) {
      if (confirm('You have unsaved changes!')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
