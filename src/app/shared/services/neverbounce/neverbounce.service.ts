import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuestBase } from '@shared/utils/guest/guest';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';
import { environment } from '@environments/environment';

export interface NeverBounceResponse {
  status: string;
  result: string;
  flags?: string[];
  suggested_correction?: string;
  execution_time?: number;
}

@Injectable({
  providedIn: 'root',
})
export class NeverbounceService extends GuestBase {
  constructor(private http: HttpClient, private iam: IamService) {
    super(new GuestService());
  }

  async validateEmail(email: string): Promise<Response> {
    const url = `${environment.validation}/validation`;
    let body = { email };
    let signedReq = await this.iam.signRequest(url, 'POST', {}, JSON.stringify(body));
    return await fetch(signedReq);
  }
}
