import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport, IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { Observable } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-disputes-reconfirm',
  templateUrl: './disputes-reconfirm.view.html',
})
export class DisputesReconfirmView {
  creditReport$: Observable<IMergeReport>;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private statesvc: StateService,
    private disputeService: DisputeService,
    private creditReportService: CreditreportService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
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
