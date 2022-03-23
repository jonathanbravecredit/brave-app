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

}
