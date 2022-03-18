import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '@shared/services/auth/iam.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  isActive: boolean = false;
  isActive$ = new BehaviorSubject<boolean>(false);
  isActiveSub$: Subscription | undefined;

  constructor(private http: HttpClient, private auth: AuthService, private iam: IamService) {
    this.getCampaignPublic().then((campaign) => {
      const isActive = campaign?.campaign !== 'NO_CAMPAIGN';
      this.isActive = isActive;
      this.isActive$.next(isActive);
    });
  }

  /**
   * Returns the current users referral record
   * @returns
   */
  async getCampaign(): Promise<ICampaign> {
    const url = `${environment.api}/campaigns`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http.get<any>(url, { headers }).toPromise();
  }

  async getCampaignPublic(): Promise<ICampaign | null> {
    try {
      let signedReq = await this.iam.signRequest(`${environment.api}/campaigns/public`, 'GET', {});
      let res = await fetch(signedReq);
      return await res.json();
    } catch (err) {
      return null;
    }
  }

  async setCampaignActive(): Promise<boolean> {
    const campaign = await this.getCampaignPublic();
    if (!campaign) {
      this.isActive = false;
      this.isActive$.next(false);
      return false;
    } else {
      const now = dayjs(new Date());
      const isActive = campaign.campaign !== 'NO_CAMPAIGN' && now.isBefore(dayjs(campaign.endDate));
      this.isActive = isActive;
      this.isActive$.next(isActive);
      return isActive;
    }
  }
}
