import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBorrowerAddress, IBorrowerName, IEmployer } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-disputes-personal-view',
  templateUrl: './disputes-personal.view.html',
})
export class DisputesPersonalView implements OnDestroy {
  isDisputeProcessInProgress = true;
  isDisputeSent = false;
  personalItem$: Observable<IPersonalItemsDetailsConfig>;
  constructor(private router: Router, public route: ActivatedRoute, private disputeService: DisputeService) {
    this.personalItem$ = this.disputeService.personalItem$.asObservable();
  }

  ngOnDestroy(): void {
    this.disputeService.clearDisputes();
  }

  async onProcessResult(event: IProcessDisputePersonalResult): Promise<void> {
    console.log('process this personal dispute request ====> ', event);
    // // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    // const { result, personalitem } = event;
    // if (personalitem === undefined) throw new Error(`Tradeline is missing from dispute`);
    // // TODO need to handle submitting multiple items.
    // this.disputeService.pushDispute(event);
    // if (result.isFinished) {
    //   try {
    //     // TODO need to handle the response appropriately now that we are set up with TU
    //     const { success, error, data } = await this.disputeService.sendStartDispute();
    //     if (success) {
    //       this.isDisputeSent = true;
    //       this.isDisputeProcessInProgress = false;
    //     } else {
    //       const errorCode = error?.Code;
    //       this.router.navigate([`/dashboard/report/tradeline/dispute/error`], {
    //         queryParams: {
    //           code: errorCode,
    //         },
    //       });
    //     }
    //   } catch (err) {
    //     throw new Error(`disputesTradeline:onProcessResult=${err}`);
    //   }
    // }
  }
}
