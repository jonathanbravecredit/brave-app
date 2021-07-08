import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';

@Component({
  selector: 'brave-tradelines',
  templateUrl: './tradelines.component.html',
})
export class TradelinesComponent {
  /**
   * Raw tradline partition directly from Merge Report
   * @property {ITradeLinePartition} tradeline
   */
  tradeline: ITradeLinePartition;

  /**
   * Initializes tradeline property with current tradeline from CreditReportService
   * @constructor
   * @param creditReportServices
   */
  constructor(
    private router: Router,
    private creditReportServices: CreditreportService,
    private disputeService: DisputeService,
  ) {
    this.tradeline = this.creditReportServices.tuTradeline;
  }

  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeClicked(tradeline: ITradeLinePartition): void {
    this.disputeService.setTradelineItem(tradeline);
    this.router.navigate(['/report/accounts/dispute/tradelines']);
  }
}
