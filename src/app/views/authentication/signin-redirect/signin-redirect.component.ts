import { ApplicationRef, Component, OnDestroy } from "@angular/core";
import { AuthService } from "@shared/services/auth/auth.service";
import { SyncService } from "@shared/services/sync/sync.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { Router } from "@angular/router";
import { Auth, CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Subscription } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";

@Component({
  selector: "brave-signin-redirect",
  templateUrl: "./signin-redirect.component.html",
})
export class SigninRedirectComponent implements OnDestroy {
  provider = CognitoHostedUIIdentityProvider;
  appSub$: Subscription;
  constructor(
    private router: Router,
    private sync: SyncService,
    private auth: AuthService,
    private appRef: ApplicationRef,
    private interstitial: InterstitialService
  ) {
    this.interstitial.changeMessage(" ");
    this.interstitial.openInterstitial();
    this.appSub$ = this.appRef.isStable
      .pipe(
        first((stable) => stable),
        tap(async (stable) => {
          await this.onboardUser();
        }),
        catchError(async () => {
          await this.onboardUser();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.appSub$.unsubscribe();
  }

  async onboardUser(): Promise<void> {
    try {
      const creds: CognitoUser = await Auth.currentAuthenticatedUser();
      const attrs = await Auth.userAttributes(creds);
      const id = attrs.filter((a) => a.Name === "sub")[0]?.Value;
      const isNew = await this.sync.isUserBrandNew(id);
      if (isNew) {
        this.cleanUp();
        this.router.navigate([routes.root.auth.created.full]);
      } else {
        await this.sync.initUser(id);
        await this.sync.subscribeToListeners(id);
        await this.sync.onboardUser(id, true);
        this.cleanUp();
      }
    } catch (err) {
      let retries: string | null = window.sessionStorage.getItem("braveOAuthRetries");
      if (retries == null) {
        retries = "3";
        window.sessionStorage.setItem("braveOAuthRetries", `${retries}`);
      } else {
        retries = (+retries - 1).toString();
        window.sessionStorage.setItem("braveOAuthRetries", `${retries}`);
      }

      if (+retries > 0) {
        const provider = window.sessionStorage.getItem("braveOAuthProvider") as CognitoHostedUIIdentityProvider;
        if (provider) {
          await this.auth.socialSignIn(provider);
        } else {
          this.cleanUp();
          this.router.navigate([routes.root.auth.invalid.full]);
        }
      } else {
        this.cleanUp();
        this.router.navigate([routes.root.auth.invalid.full]);
      }
    }
  }

  cleanUp(): void {
    window.sessionStorage.removeItem("braveOAuthProvider");
    this.interstitial.closeInterstitial();
  }
}
