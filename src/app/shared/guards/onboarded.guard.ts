import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { AppDataStateModel } from '@store/app-data/app-data.model';
import { OnboardingService } from '@views/onboarding/onboarding.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnboardedGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute, private onboarding: OnboardingService) {}
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const id = await this.onboarding.getUserId();
    if (!id) {
      this.router.navigate(['/auth/thankyou']); // need a please confirm account view
      return false;
    } else {
      try {
        let status: boolean = false;
        const isUserNew = await this.onboarding.isUserNew(id);
        const isOnboarded = await this.onboarding.isUserOnboarded();
        // initiate a new user else sync db to state
        status = await this.handleUser(isUserNew, id);
        // subscribe to listeners
        status = await this.handleListeners(id);
        // go to onboarding if not onboarded, otherwise return true
        status = await this.handleOnboarding(isOnboarded);
        return status;
      } catch (err) {
        this.router.navigate(['/auth/signin']); // need a please confirm account view
        return false;
      }
    }
  }

  async handleUser(isUserNew: boolean = true, id: string): Promise<boolean> {
    try {
      if (isUserNew) {
        await this.onboarding.initUser(id);
      } else {
        await this.onboarding.syncDbToState(id);
      }
      return true;
    } catch (err) {
      console.log('handleUser:error ===> ', err);
      return false;
    }
  }

  async handleOnboarding(isOnboarded: boolean): Promise<boolean> {
    try {
      if (!isOnboarded) {
        await this.onboarding.goToLastOnboarded();
        return false;
      } else {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  async handleListeners(id: string): Promise<boolean> {
    try {
      await this.onboarding.subscribeToListeners(id);
      return true;
    } catch (err) {
      console.log('subscribeToListeners:error ==> ', err);
      return false;
    }
  }
}
