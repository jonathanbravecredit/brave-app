import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Observable } from 'rxjs';

export class RedirectResolver implements Resolve<CognitoHostedUIIdentityProvider> {
  provider = CognitoHostedUIIdentityProvider;
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const param = route.paramMap.get('error_description');
    const provider = [this.provider.Google, this.provider.Facebook].find((p, i) => {
      return (
        (i === 0 && param?.toLowerCase().includes('google')) || (i === 1 && param?.toLowerCase().includes('facebook'))
      );
    });
    return provider;
  }
}
