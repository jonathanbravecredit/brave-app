import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { CreditReportSelectors, CreditReportStateModel } from '@store/credit-report';
import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-disputes-reconfirm',
  templateUrl: './disputes-reconfirm.view.html',
})
export class DisputesReconfirmView {
  report$: Observable<CreditReportStateModel> = this.store.select(CreditReportSelectors.getCreditReport);

  constructor(
    private store: Store,
    private router: Router,
    private statesvc: StateService,
    private disputeService: DisputeService,
  ) {}

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
