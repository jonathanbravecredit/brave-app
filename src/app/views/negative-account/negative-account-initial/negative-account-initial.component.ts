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
    this.disputeService
      .onUserConfirmed()
      .then((_) => {
        this.disputeService.setTradelineItem(card);
        this.router.navigate(['/dashboard/report/detail/dispute/tradelines']);
      })
      .catch((err) => {
        throw new Error(`Error in tradelines:onDisputeClicked=${err}`);
      });
  }
}
