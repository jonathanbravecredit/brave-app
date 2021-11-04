import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPublicPartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { Observable } from 'rxjs';

type viewDisplay = 'sent' | 'not-sent';

@Component({
  selector: 'brave-disputes-public-view',
  templateUrl: './disputes-public.view.html',
})
export class DisputesPublicView implements OnDestroy {
  viewDisplay: viewDisplay = 'not-sent';
  publicItem$: Observable<IPublicPartition>;

  constructor(private router: Router, private route: ActivatedRoute, private disputeService: DisputeService) {
    this.publicItem$ = this.disputeService.publicItem$.asObservable();
  }

  ngOnDestroy(): void {
    this.disputeService.clearDisputes();
  }

  async onProcessResult(event: IProcessDisputePublicResult): Promise<void> {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    const { result, publicItem } = event;
    if (publicItem === undefined) throw new Error(`Tradeline is missing from dispute`);
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
        throw new Error(`disputesTradeline:onProcessResult=${err}`);
      }
    }
  }
}
