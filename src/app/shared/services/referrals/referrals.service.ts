import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CURRENT_CAMPAIGN } from '@shared/constants/campaign';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '@shared/services/auth/iam.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService {
  campaign = CURRENT_CAMPAIGN;
  referredByCode$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private auth: AuthService, private iam: IamService) {}

  /**
   * HTTP Requests to create referral in referral service backend
   * @param email
   * @param referredByCode
   * @returns
   */
  async createReferral(email: string, referredByCode?: string | null): Promise<any> {
    const url = `${environment.marketing}/referral`;
    let body = { id: email, campaign: this.campaign, referredByCode };
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
    const url = `${environment.marketing}/referral`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const body = JSON.stringify({
      id,
      enrollmentStatus,
    });
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http
      .put<any>(url, body, { headers })
      .toPromise();
  }

  /**
   * Returns the current users referral record
   * @returns
   */
  async getReferral(): Promise<any> {
    const url = `${environment.marketing}/referral`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http
      .get<any>(url, { headers })
      .toPromise();
  }

  /**
   * HTTP Requests to get the referral earnings by campaign and grouped monthly
   * @param month
   * @param year
   * @returns
   */
  async getReferralMonthlyCampaignEarnings(month?: string, year?: string): Promise<IGroupedYearMonthReferral[]> {
    const url = `${environment.marketing}/referral/campaign/earnings/monthly`;
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    let params = new HttpParams();
    params = params.append('campaign', this.campaign);
    if (month) params = params.append('month', month);
    if (year) params = params.append('year', year);
    return this.http
      .get<any>(url, { headers, params })
      .toPromise();
  }
}
