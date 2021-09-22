import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { OnboardingService } from '@views/onboarding/onboarding.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnboardedGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute, private onboarding: OnboardingService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  async isUserNew(id: string): Promise<boolean> {
    try {
      return (await this.onboarding.isUserBrandNew(id)) || false;
    } catch (err) {
      console.log('isUserNew:error ==> ', err);
      return true;
    }
  }

  async isUserOnboarded(): Promise<boolean> {
    try {
      return await this.onboarding.isUserOnboarded();
    } catch (err) {
      console.log('isUserOnboarded:error ==> ', err);
      return false;
    }
  }
  async onboardUser(id: string): Promise<boolean> {
    try {
      await this.onboarding.onboardUser(id);
      return true;
    } catch (err) {
      console.log('onboardUser:error ==> ', err);
      return false;
    }
  }
}
