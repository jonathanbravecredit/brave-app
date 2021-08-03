import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import { IBorrower, IMergeReport, IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { Observable } from 'rxjs';

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

  onDisputePersonalClick(personalItem: IBorrower): void {
    window.alert('personal disputes are not enabled yet');
  }

  onDisputePublicClick(publicItem: IPublicPartition): void {
    window.alert('public disputes are not enabled yet');
  }
  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeTradelineClick(tradeline: ITradeLinePartition): void {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `tradelines:onDisputeClicked=Missing id:${id}`;
    this.disputeService.setTradelineItem(tradeline);
    this.router.navigate(['./tradeline'], {
      relativeTo: this.route,
      queryParams: {
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
