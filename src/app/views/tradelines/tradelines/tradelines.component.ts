import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
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
   * Flag to indicate that dispute terms have been acknowledged
   */
  _acknowledged: boolean = false;

  /**
   * Initializes tradeline property with current tradeline from CreditReportService
   * @constructor
   * @param creditReportServices
   */
  constructor(
    private router: Router,
    private statesvc: StateService,
    private transunion: TransunionService,
    private disputeService: DisputeService,
    private creditReportServices: CreditreportService,
  ) {
    this.tradeline$ = this.creditReportServices.tuTradeline$.asObservable();
    this.acknowledged = this.statesvc.state?.appData.agencies?.transunion?.acknowledgedDisputeTerms || false;
    console.log('acknowledged', this.acknowledged);
  }

  set acknowledged(value: boolean) {
    this._acknowledged = value;
  }
  get acknowledged(): boolean {
    return this._acknowledged;
  }
  /**
   * Sets the current dispute in the service based on the tradeline clicked
   * - TODO...reevaluate when you understand the process better
   * @param {ITradeLinePartition} tradeline
   * @returns {void}
   */
  onDisputeClicked(tradeline: ITradeLinePartition): void {
    this.disputeService
      .onUserConfirmed()
      .then((_) => {
        this.disputeService.setTradelineItem(tradeline);
        this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
      })
      .catch((err) => {
        throw new Error(`Error in tradelines:onDisputeClicked=${err}`);
      });
  }
}
