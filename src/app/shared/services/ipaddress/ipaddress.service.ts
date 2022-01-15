import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';
import { GuestBase } from '@shared/utils/guest/guest';

export interface IpAddressResponse {
  success: boolean;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class IpaddressService extends GuestBase {
  constructor(private iam: IamService) {
    super(new GuestService());
  }

  async validateIpAddress(): Promise<Response> {
    const url = `${environment.validation}/validation/ipwhitelist`;
    const body = { dummy: 'dummy ' };
    let signedReq = await this.iam.signRequest(url, 'POST', {}, JSON.stringify(body));
    return await fetch(signedReq);
  }
}
