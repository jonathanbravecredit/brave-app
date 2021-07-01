import { Component } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';

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
  constructor(private creditReportServices: CreditreportService) {
    this.tradeline = this.creditReportServices.tuTradeline;
  }

  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeClicked(tradeline: ITradeLinePartition): void {
    this.creditReportServices.setDispute(tradeline);
  }
}
