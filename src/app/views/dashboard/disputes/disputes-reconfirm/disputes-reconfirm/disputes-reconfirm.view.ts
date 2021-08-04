import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountTypes } from '@shared/constants/account-types';
import {
  IBorrower,
  IBorrowerAddress,
  IBorrowerName,
  IEmployer,
  IMergeReport,
  IPublicPartition,
  ITradeLinePartition,
} from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
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

  onDisputePersonalClick(data: {
    personalItem: IBorrowerAddress | IEmployer | IBorrowerName | undefined;
    personalType: PersonalDisputeTypes;
  }): void {
    const { personalItem, personalType } = data;
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `reconfirm:onDisputePersonalClick=Missing id:${id}`;
    this.disputeService.setPersonalItem(personalItem);
    this.router.navigate(['./personalitem'], {
      relativeTo: this.route,
      queryParams: {
        type: null,
        personaltype: personalType,
      },
      queryParamsHandling: 'merge',
    });
  }

  onDisputePublicClick(publicItem: IPublicPartition): void {
    const id = this.statesvc.state?.appData.id;
    if (!id) throw `reconfirm:onDisputePublicClick=Missing id:${id}`;
    this.disputeService.setPublicItem(publicItem);
    this.router.navigate(['./publicitem'], {
      relativeTo: this.route,
      queryParams: {
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
    this.router.navigate(['./tradeline'], {
      relativeTo: this.route,
      queryParams: {
        type: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
