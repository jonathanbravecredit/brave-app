import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IamService } from '@shared/services/auth/iam.service';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService {
  constructor(private iam: IamService) {}

  async createReferral(email: string): Promise<any> {
    const url = `${environment.marketing}/referral`;
    let body = { id: email };
    let headers = {};
    let signedReq = await this.iam.signRequest(url, 'POST', headers, JSON.stringify(body));
    return await fetch(signedReq);
  }
}
