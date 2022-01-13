import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeStatus } from '@shared/constants/disputes.interface';
import { IDispute } from '@shared/interfaces/disputes';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { TDisputeEntity } from '@views/dashboard/disputes/components/cards/interfaces';
import { Subscription } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

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
    private transunion: TransunionService,
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

  /**
   * Method to check the status of the results
   * - two states: 1. complete, no results 2. complete, results
   * @param entity
   * @returns
   */
  async onViewDetailsClick(entity: TDisputeEntity): Promise<void> {
    if (!entity.dispute) throw `dispute missing`;
    const dispute: IDispute = entity.dispute;
    const { disputeId } = dispute;
    this.disputeService.currentDispute$.next(dispute);
    const { disputeInvestigationResults: irID, disputeCreditBureau: cbID } = dispute;
    if (dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete && (!irID || !cbID)) {
      // the results are not saved...can attempt to gather them again
      // TODO need to handle this case...complete but no id's
      const resp = await this.transunion.getInvestigationResults(disputeId);
      const { success, error, data } = resp;
      if (!success) {
        this.router.navigate([routes.root.dashboard.disputes.error.segment], {
          queryParams: {
            code: error?.Code,
          },
        });
      }
    } else {
      // do I need to set the current dispute
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage('gathering results');
      this.router.navigate([routes.root.dashboard.disputes.findings.segment, irID, cbID]);
    }
  }

  onViewHistoricalClick(): void {
    this.router.navigate([routes.root.dashboard.disputes.historical.segment]);
  }
}
