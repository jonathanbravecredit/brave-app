import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeStatus } from '@shared/constants/disputes.interface';
import { ITUServiceResponse } from '@shared/interfaces';
import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { TDisputeEntity } from '@views/dashboard/disputes/components/cards/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-disputes-overview-initial',
  templateUrl: './disputes-overview-initial.view.html',
})
export class DisputesOverviewInitialView implements OnInit {
  disputes$: Observable<(DisputeInput | null | undefined)[] | null | undefined>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
  ) {
    this.disputes$ = this.disputeService.disputes$.asObservable();
  }

  ngOnInit(): void {}

  /**
   * Method to check the status of the results
   * - two states: 1. complete, no results 2. complete, results
   * @param entity
   * @returns
   */
  async onViewDetailsClick(entity: TDisputeEntity): Promise<void> {
    if (!entity.dispute) throw `dispute missing`;
    if (!entity.dispute) return;
    const dispute: DisputeInput = entity.dispute;
    if (
      dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete &&
      !JSON.parse(dispute.disputeInvestigationResults || '')
    ) {
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage('gathering results');
      const res = await this.getInvestigationResults(dispute.disputeId);
      if (!res.success) {
        setTimeout(() => {
          this.interstitial.closeInterstitial();
        }, 2000);
      } else {
        this.router.navigate(['../findings'], {
          relativeTo: this.route,
          queryParams: {
            id: dispute.disputeId,
          },
        });
      }
    } else {
      // do I need to set the current dispute
      this.router.navigate(['../findings'], {
        relativeTo: this.route,
        queryParams: {
          id: dispute.disputeId,
        },
      });
    }
  }

  /**
   * Query the TU service for any investigation results
   * @param disputeId - unique id sent back by TU
   */
  async getInvestigationResults(disputeId: string | null | undefined): Promise<ITUServiceResponse<any>> {
    try {
      if (!disputeId) throw `Missing dispute Id=${disputeId}`;
      return await this.disputeService.getInvestigationResults(disputeId);
    } catch (err: any) {
      this.interstitial.changeMessage('Error fetching results');
      return { success: false, error: err };
    }
  }
}
