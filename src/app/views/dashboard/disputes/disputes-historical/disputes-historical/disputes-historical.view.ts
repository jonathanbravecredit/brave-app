import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDispute } from '@shared/interfaces/disputes';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeStatus } from '@shared/constants/disputes.interface';
import { IDisputeHistorical } from '@views/dashboard/disputes/components/cards/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-disputes-historical',
  templateUrl: './disputes-historical.view.html',
})
export class DisputesHistoricalView implements OnInit, OnDestroy {
  routeSub$: Subscription | undefined;
  allDisputes: IDispute[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
  ) {
    this.routeSub$ = this.route.data.subscribe((resp) => {
      const { allDisputes, currDispute } = resp.disputes;
      this.allDisputes = allDisputes;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }

  onViewDetailsClick(entity: IDisputeHistorical | undefined): void {
    if (!entity?.dispute) throw `dispute missing`;
    const dispute: IDispute = entity.dispute;
    const disputeId: string = dispute.id;
    this.disputeService.currentDispute$.next(dispute);
    const { disputeInvestigationResults: irID, disputeCreditBureau: cbID } = dispute;
    if (dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete && (!irID || !cbID)) {
      // the results are not saved...can attempt to gather them again
      // TODO need to handle this case...complete but no id's
    } else {
      // do I need to set the current dispute
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage('gathering results');
      this.router.navigate(['../findings', irID, cbID], {
        relativeTo: this.route,
      });
    }
  }
}
