import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';
import { IDisputePersonalItem, IDisputePublicItem, IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountType: 'tradeline' | 'personalItem' | 'publicItem' | undefined;
  tradeline$: BehaviorSubject<IDisputeTradelineItem | null> = new BehaviorSubject(null);
  personalItem$: BehaviorSubject<IDisputePersonalItem | null> = new BehaviorSubject(null);
  publicItem$: BehaviorSubject<IDisputePublicItem | null> = new BehaviorSubject(null);

  constructor(
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private router: Router,
  ) {}

  async onConfirmed(tradeline: ITradeLinePartition): Promise<void> {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    this.interstitial.changeMessage('checking eligibility');
    this.interstitial.openInterstitial();
    this.disputeService
      .onUserConfirmed()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate([routes.root.dashboard.disputes.reconfirm.full], {
            queryParams: {
              type: filter,
            },
          });
        } else {
          const code = `${error?.Code}`;
          this.handleError(code);
        }
      })
      .catch((err) => {
        this.handleError();
      });
  }

  handleError(code: string = '197'): void {
    this.interstitial.closeInterstitial();
    this.router.navigate([routes.root.dashboard.disputes.error.full], {
      queryParams: {
        code: code,
      },
    });
  }
}
