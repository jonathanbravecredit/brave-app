import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { environment } from "@environments/environment";
import { CURRENT_CAMPAIGN } from "@shared/constants/campaign";
import { IReferral } from "@shared/interfaces/referrals.interface";
import { AuthService } from "@shared/services/auth/auth.service";
import { IamService } from "@shared/services/auth/iam.service";
import { FeatureFlagsService } from "@shared/services/featureflags/feature-flags.service";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReferralsService implements OnDestroy {
  campaign = CURRENT_CAMPAIGN;
  referredByCode$ = new BehaviorSubject<string | null>(null);
  referredByCodeValid$ = new BehaviorSubject<boolean>(true);
  isActive: boolean = false;
  isActive$ = new BehaviorSubject<boolean>(false);
  isActiveSub$: Subscription | undefined;

  constructor(
    private feature: FeatureFlagsService,
    private http: HttpClient,
    private auth: AuthService,
    private iam: IamService
  ) {
    this.isActiveSub$ = this.feature.referrals$.subscribe((isActive) => {
      this.isActive = isActive;
      this.isActive$.next(isActive);
    });
  }

  ngOnDestroy(): void {
    this.isActiveSub$?.unsubscribe();
  }

  async validateReferralCode(
    referralCode: string | undefined
  ): Promise<{ valid: boolean }> {
    if (!referralCode) return { valid: false };
    try {
      const url = `${environment.api}/referral/validation/${referralCode}`;
      const referralValidationRequest = await this.iam.signRequest(
        url,
        "POST",
        {},
        JSON.stringify({})
      );
      const data = await fetch(referralValidationRequest);
      const parsed: { valid: boolean } = await data.json();
      this.referredByCodeValid$.next(parsed.valid);
      return parsed;
    } catch (err) {
      return { valid: false };
    }
  }

  /**
   * Returns the current users referral record
   * @param referralCode
   * @returns
   */
  async getReferralByReferralCode(referralCode: string) {
    //TODO
  }

  /**
   * HTTP Requests to create referral in referral service backend
   * @param sub
   * @param referredByCode
   * @returns
   */

  async createReferral(
    sub: string,
    referredByCode?: string | null
  ): Promise<any> {
    if (!this.isActive) return;
    try {
      const url = `${environment.api}/referral`;
      let body = { id: sub, campaign: this.campaign } as {
        id: string;
        campaign: string;
        referredByCode?: string;
      };
      body = referredByCode ? { ...body, referredByCode } : body;
      let signedReq = await this.iam.signRequest(
        url,
        "POST",
        {},
        JSON.stringify(body)
      );
      return await fetch(signedReq);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns the current users referral record
   * @returns
   */
  async getReferral(): Promise<IReferral> {
    const url = `${environment.api}/referral`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http.get<any>(url, { headers })?.toPromise();
  }
}
