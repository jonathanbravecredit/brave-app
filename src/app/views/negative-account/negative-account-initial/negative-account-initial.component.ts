import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { IFulfillResult, IFulfillServiceProductResponse } from '@shared/interfaces/fulfill.interface';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { TUReportResponseInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { returnNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent {
  creditReport$: Observable<IMergeReport>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transunion: TransunionService,
    private creditReportService: CreditreportService,
    private disputeService: DisputeService,
  ) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  /**
   * Listens for the Dispute confirmation and refreshes the report
   * @param card
   */
  async onConfirmed(card: INegativeAccountCardInputs): Promise<void> {
    const state = this.creditReportService.getStateSnapshot()?.appData;
    if (!state) throw new Error(`Error in negativeAccountInitialComponent:onConfirmed=Missing state`);
    try {
      const res = await this.transunion.getCreditReport(state, false);
      if (!res) throw new Error(`Failed to refresh report; response:${res}`);
      const fulfillRaw = res ? JSON.parse(res) : undefined;
      const fulfillResult = returnNestedObject(JSON.parse(fulfillRaw.Fulfill), 'FulfillResult');
      const enrich = this.transunion.enrichFulfillData(state, fulfillResult);
      if (!enrich?.agencies) throw new Error('Fufill failed');
      const data = await this.creditReportService.updateReportAsync(enrich.agencies);
      console.log('updated state', data);
      if (!data) throw new Error('Failed to update state with refreshed report');
      const disputeStatus = await this.transunion.getDisputeStatus(data as AppDataStateModel);
      console.log('status back', disputeStatus);
      const disputeRaw = disputeStatus ? JSON.parse(disputeStatus) : undefined;
      const disputeResult = returnNestedObject(JSON.parse(disputeRaw.GetDisputeStatus), 'GetDisputeStatusResult');
      //if (disputeResult.ResponseType.toLowerCase() !== 'success') throw new Error('GetDisputeStatus filed');
      // TODO error in request...question out to Evadney for better guidance
      // assume it comes back successfully for now
      this.disputeService.setTradelineItem(card);
      this.router.navigate(['../dispute'], { relativeTo: this.route });
    } catch (err) {
      throw new Error(err);
    }
  }

  acknowledgeDisputeTerms(): void {}
}
