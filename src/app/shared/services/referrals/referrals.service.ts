import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '@shared/services/auth/iam.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService implements OnDestroy {
  referredByCode$ = new BehaviorSubject<string | null>(null);
  isActive: boolean = false;
  isActiveSub$: Subscription | undefined;

  constructor(
    private feature: FeatureFlagsService,
    private http: HttpClient,
    private auth: AuthService,
    private iam: IamService,
  ) {
    this.isActiveSub$ = this.feature.referrals$.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }

  ngOnDestroy(): void {
    this.isActiveSub$?.unsubscribe();
  }

  /**
   * HTTP Requests to create referral in referral service backend
   * @param email
   * @param referredByCode
   * @returns
   */
  async createReferral(email: string, referredByCode?: string | null): Promise<any> {
    if (!this.isActive) return;
    const url = `${environment.marketing}/referral`;
    let body = { id: email, referredByCode };
    let headers = {};
    let signedReq = await this.iam.signRequest(url, 'POST', headers, JSON.stringify(body));
    return await fetch(signedReq);
  }

  /**
   * HTTP Requests to update referral in referral service backend
   * @param id
   * @param enrollmentStatus
   * @returns
   */
  async updateReferral(id: string, enrollmentStatus?: 'pending' | 'enrolled'): Promise<any> {
    if (!this.isActive) return;
    const url = `${environment.marketing}/referral`;
    const accessToken = await this.auth.getAuthTokens();
    const body = JSON.stringify({
      id,
      enrollmentStatus,
    });
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken,
    });
    return await this.http
      .put<any>(url, body, { headers })
      .toPromise();
  }
}
