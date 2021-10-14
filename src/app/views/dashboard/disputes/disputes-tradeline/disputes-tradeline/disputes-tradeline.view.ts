import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { Observable } from 'rxjs';

type viewDisplay = 'sent' | 'not-sent';

@Component({
  selector: 'brave-disputes-tradeline-view',
  templateUrl: './disputes-tradeline.view.html',
})
export class DisputesTradelineView implements OnDestroy {
  viewDisplay: viewDisplay = 'not-sent';
  tradeline$: Observable<ITradeLinePartition>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
  ) {
    this.tradeline$ = this.disputeService.tradeline$.asObservable();
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
          this.viewDisplay = 'sent';
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
        this.interstitial.fetching$.next(false);
        throw new Error(`disputesTradeline:onProcessResult=${err}`);
      }
    }
  }
}
