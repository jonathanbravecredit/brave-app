import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { StateService } from '@shared/services/state/state.service';

@Injectable()
export class AccountSummaryWithDetailsService {
  tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  constructor(
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private router: Router,
    private statesvc: StateService,
  ) {}

  async onConfirmed(
    tradeline: ITradeLinePartition | null,
    personal: IPersonalItemsDetailsConfig | null,
    publicPart: IPublicPartition | null,
  ): Promise<void> {
    if (tradeline) {
      this.onDisputeTradelineClick(tradeline);
    } else if (personal) {
      this.onDisputePersonalClick(personal);
    } else if (publicPart) {
      this.onDisputePublicClick(publicPart);
    }
  }

  handleError(code: string = '197'): void {
    this.interstitial.closeInterstitial();
    this.router.navigate([routes.root.dashboard.disputes.error.full], {
      queryParams: {
        code: code,
      },
    });
  }

  onDisputePersonalClick(personalItem: IPersonalItemsDetailsConfig): void {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `reconfirm:onDisputePersonalClick=Missing id:${id}`;
    this.disputeService.setPersonalItem(personalItem);
    this.router.navigate([routes.root.dashboard.disputes.personalitem.full], {
      queryParams: {
        step: 'summary',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  onDisputePublicClick(publicItem: IPublicPartition): void {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `reconfirm:onDisputePublicClick=Missing id:${id}`;
    this.disputeService.setPublicItem(publicItem);
    this.router.navigate([routes.root.dashboard.disputes.publicitem.full], {
      queryParams: {
        step: 'select',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeTradelineClick(tradeline: ITradeLinePartition): void {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `reconfirm:onDisputeTradelineClick=Missing id:${id}`;
    this.disputeService.setTradelineItem(tradeline);
    this.router.navigate([routes.root.dashboard.disputes.tradeline.full], {
      queryParams: {
        step: 'select',
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
