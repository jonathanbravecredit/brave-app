import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuestBase } from '@shared/utils/guest/guest';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';

export interface NeverBounceResponse {
  response: {
    status: string;
    result: string;
    flags?: string[];
    suggested_correction?: string;
    execution_time?: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class NeverbounceService extends GuestBase {
  constructor(private http: HttpClient, private iam: IamService) {
    super(new GuestService());
  }

  async validateEmail(email: string): Promise<any> {
    const url = `https:dummy_url/validation`;
    let body = { email };
    let signedReq = await this.iam.signRequest(url, 'GET', {}, JSON.stringify(body));
    return await fetch(signedReq);
  }
}
