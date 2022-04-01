import { Component } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-tradelines',
  templateUrl: './tradelines.component.html',
})
export class TradelinesComponent {
  /**
   * Raw tradline partition directly from Merge Report
   */
  tradeline$: Observable<ITradeLinePartition>;
  /**
   * Raw tradline partition directly from Merge Report
   */
  subscriber$: Observable<ISubscriber>;
  /**
   * Initializes tradeline property with current tradeline from CreditReportService
   * @constructor
   * @param creditReportServices
   */
  constructor(private creditReportServices: CreditreportService) {
    this.tradeline$ = this.creditReportServices.tuTradeline$.asObservable();
    this.subscriber$ = this.creditReportServices.tuTradelineSubscriber$.asObservable();
  }
}
