import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';
import { GuestBase } from '@shared/utils/guest/guest';

@Injectable({
  providedIn: 'root',
})
export class IpaddressService extends GuestBase {
  constructor(private http: HttpClient, private iam: IamService) {
    super(new GuestService());
  }

  async validateEmail(email: string): Promise<Response> {
    const url = `${environment.validation}/validation/ipaddress`;
    let body = { email };
    let signedReq = await this.iam.signRequest(url, 'POST', {}, JSON.stringify(body));
    return await fetch(signedReq);
  }
}
