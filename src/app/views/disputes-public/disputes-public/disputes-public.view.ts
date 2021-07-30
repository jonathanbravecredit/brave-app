import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IPublicPartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-disputes-public-view',
  templateUrl: './disputes-public.view.html',
})
export class DisputesPublicView implements OnDestroy {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  isDisputeSent = false;
  publicItem$: Observable<IPublicPartition>;
  constructor(private router: Router, private disputeService: DisputeService) {
    this.publicItem$ = this.disputeService.publicItem$.asObservable();
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
          this.router.navigate([`/dashboard/report/tradeline/dispute/error`], {
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
