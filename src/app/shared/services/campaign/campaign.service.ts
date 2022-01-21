import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  isActive: boolean = false;
  isActive$ = new BehaviorSubject<boolean>(false);
  isActiveSub$: Subscription | undefined;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.getCampaign().then((campaign) => {
      const isActive = campaign.campaign !== 'NO_CAMPAIGN';
      this.isActive = isActive;
      this.isActive$.next(isActive);
    });
  }

  /**
   * Returns the current users referral record
   * @returns
   */
  async getCampaign(): Promise<ICampaign> {
    const url = `${environment.marketing}/campaigns`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http
      .get<any>(url, { headers })
      .toPromise();
  }
}
