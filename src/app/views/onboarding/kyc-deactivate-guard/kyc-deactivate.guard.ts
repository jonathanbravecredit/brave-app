import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface KycComponentCanDeactivate {
  form: FormGroup | undefined;
  canDeactivate(form: FormGroup | undefined): boolean | Observable<boolean>;
}

export const CanDeactivateState = {
  defendAgainstBrowserBackButton: false,
};

@Injectable({ providedIn: 'root' })
export class KycDeactivateGuard implements CanDeactivate<KycComponentCanDeactivate> {
  constructor() {}
  canDeactivate(
    component: KycComponentCanDeactivate,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!component.canDeactivate(component.form)) {
      if (window.confirm('Navigate away? Changes you made may not be save.')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
