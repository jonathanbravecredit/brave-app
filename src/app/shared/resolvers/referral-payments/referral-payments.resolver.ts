import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IPayments } from '@shared/interfaces/referrals.interface';
import { PaymentsService } from '@shared/services/payments/payments.service';

@Injectable({
  providedIn: 'root'
})
export class ReferralPaymentsResolver implements Resolve<IPayments> {
  constructor(private paymentsService: PaymentsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IPayments> {
    return await this.paymentsService.getPayments();
  }
}
