import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CURRENT_CAMPAIGN } from '@shared/constants/campaign';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  campaign = CURRENT_CAMPAIGN;
  referredByCode$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private auth: AuthService) {}

  /**
   * 
   * @returns 
   */
  async getPayments(): Promise<any> {
    const url = `${environment.marketing}/referral/campaign/payments`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    let params = new HttpParams();
    params = params.append('campaign', this.campaign);
    return await this.http
      .get<any>(url, { headers, params })
      .toPromise();
  }
}
