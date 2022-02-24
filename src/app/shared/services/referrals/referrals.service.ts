import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '@environments/environment';
import { CURRENT_CAMPAIGN } from '@shared/constants/campaign';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '@shared/services/auth/iam.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService implements OnDestroy {
  campaign = CURRENT_CAMPAIGN;
  referredByCode$ = new BehaviorSubject<string | null>(null);
  isActive: boolean = false;
  isActive$ = new BehaviorSubject<boolean>(false);
  isActiveSub$: Subscription | undefined;

  constructor(
    private feature: FeatureFlagsService,
    private http: HttpClient,
    private auth: AuthService,
    private iam: IamService,
  ) {
    this.isActiveSub$ = this.feature.referrals$.subscribe((isActive) => {
      this.isActive = isActive;
      this.isActive$.next(isActive);
    });
  }

  ngOnDestroy(): void {
    this.isActiveSub$?.unsubscribe();
  }

  checkCodeValidity(referralCode: string): void {
    let referral = this.getReferralByReferralCode(referralCode); //TODO
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

  async createReferral(sub: string, referredByCode?: string | null): Promise<any> {
    if (!this.isActive) return;
    const url = `${environment.api}/referral`;
    let body = { id: sub, campaign: this.campaign, referredByCode };
    let headers = {};
    let signedReq = await this.iam.signRequest(url, 'POST', headers, JSON.stringify(body));
    return await fetch(signedReq);
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
    return await this.http.get<any>(url, { headers }).toPromise();
  }
}
