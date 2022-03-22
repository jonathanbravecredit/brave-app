import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Injectable({
  providedIn: 'root',
})
export class NegativeAccountService {
  constructor(
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private router: Router,
  ) {}

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
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
