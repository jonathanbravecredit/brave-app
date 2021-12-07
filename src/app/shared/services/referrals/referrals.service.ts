import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '@shared/services/auth/iam.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService {
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
}
