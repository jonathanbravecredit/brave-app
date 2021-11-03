import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeStatus } from '@shared/constants/disputes.interface';
import { IDispute } from '@shared/interfaces/disputes';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { TDisputeEntity } from '@views/dashboard/disputes/components/cards/interfaces';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'brave-disputes-overview-initial',
  templateUrl: './disputes-overview-initial.view.html',
})
export class DisputesOverviewInitialView implements OnInit, OnDestroy {
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

  ngOnInit(): void { }
  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }

  /**
   * Method to check the status of the results
   * - two states: 1. complete, no results 2. complete, results
   * @param entity
   * @returns
   */
  async onViewDetailsClick(entity: TDisputeEntity): Promise<void> {
    if (!entity.dispute) throw `dispute missing`;
    if (!entity.dispute) return;
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

  onViewHistoricalClick(): void {
    this.router.navigate(['../historical'], {
      relativeTo: this.route
    })
  }
}
