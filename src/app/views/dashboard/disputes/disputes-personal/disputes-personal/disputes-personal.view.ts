import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { Observable } from 'rxjs';

type viewDisplay = 'sent' | 'not-sent';

@Component({
  selector: 'brave-disputes-personal-view',
  templateUrl: './disputes-personal.view.html',
})
export class DisputesPersonalView implements OnDestroy {
  viewDisplay: viewDisplay = 'not-sent';
  personalItem$: Observable<IPersonalItemsDetailsConfig>;

  constructor(private router: Router, private route: ActivatedRoute, private disputeService: DisputeService) {
    this.personalItem$ = this.disputeService.personalItem$.asObservable();
  }

  ngOnDestroy(): void {
    this.disputeService.clearDisputes();
  }

  async onProcessResult(event: IProcessDisputePersonalResult): Promise<void> {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    const { result, personalItem } = event;
    if (personalItem === undefined) throw new Error(`Tradeline is missing from dispute`);
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
