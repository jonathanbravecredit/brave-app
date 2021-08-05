import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-disputes-tradeline-view',
  templateUrl: './disputes-tradeline.view.html',
})
export class DisputesTradelineView implements OnDestroy {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  isDisputeSent = false;
  dispute$: Observable<ITradeLinePartition>;
  constructor(private router: Router, private route: ActivatedRoute, private disputeService: DisputeService) {
    this.dispute$ = this.disputeService.tradeline$.asObservable();
  }

  onGoBack() {
    const currentInnerProcessNavigationIndex = this.disputeProcess?.getCurrentNavigationIndex();
    if (currentInnerProcessNavigationIndex) {
      if (currentInnerProcessNavigationIndex > 0) {
        this.disputeProcess?.goBack();
      }
    }
  }

  ngOnDestroy(): void {
    this.disputeService.clearDisputes();
  }

  async onProcessResult(event: IProcessDisputeTradelineResult): Promise<void> {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    const { result, tradeline } = event;
    if (tradeline === undefined) throw new Error(`Tradeline is missing from dispute`);
    // TODO need to handle submitting multiple items.
    this.disputeService.pushDispute(event);
    if (result.isFinished) {
      try {
        // TODO need to handle the response appropriately now that we are set up with TU
        const { success, error, data } = await this.disputeService.sendStartDispute();
        if (success) {
          this.isDisputeSent = true;
          this.isDisputeProcessInProgress = false;
        } else {
          const errorCode = error?.Code;
          this.router.navigate([`./error`], {
            relativeTo: this.route,
            queryParams: {
              code: errorCode,
            },
          });
        }
      } catch (err) {
        throw new Error(`disputesTradeline:onProcessResult=${err}`);
      }
    }
  }
}
