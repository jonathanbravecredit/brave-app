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
    const disputeId: string = dispute.id;
    this.disputeService.currentDispute$.next(dispute);
    const irID = JSON.parse(dispute.disputeInvestigationResults || '') as { id: string };
    const cbID = JSON.parse(dispute.disputeCreditBureau || '') as { id: string };
    if (dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete && (!irID || !cbID)) {
      // the results are not saved...can attempt to gather them again
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage('...missing ids');
      // const res = await this.getInvestigationResults(dispute.disputeId);
      // !!! IMPORTANT !!! need to think this through
      // need to wait until the results are updated in the database...and the state syncs
      // then get the id's for the reports
      // then send them to the route via the query
      // let attempts = 10;
      //   setInterval(() => {
      //     const disputes = this.disputeService.disputes$.getValue();
      //     const dispute = disputes?.find(item => {
      //       return item?.id === disputeId;
      //     });
      //     const irID = JSON.parse(dispute?.disputeInvestigationResults || '') as { id: string };
      //     const cbID = JSON.parse(dispute?.disputeCreditBureau || '') as { id: string };
      //     if (irID?.id && cbID?.id) {
      //       this.router.navigate(['../findings'], {
      //         relativeTo: this.route,
      //         queryParams: {
      //           investigation: irID,
      //           creditbureau: cbID
      //         },
      //       });
      //     } else {
      //       attempts--;
      //     }
      //   }, 1000)

      // clearInterval()
    } else {
      // do I need to set the current dispute
      this.interstitial.openInterstitial();
      this.interstitial.changeMessage('gathering results');
      this.router.navigate(['../findings', irID.id, cbID.id], {
        relativeTo: this.route,
      });
    }
  }

  // /**
  //  * Query the TU service for any investigation results
  //  * @param disputeId - unique id sent back by TU
  //  */
  // async getInvestigationResults(disputeId: string | null | undefined): Promise<ITUServiceResponse<any>> {
  //   try {
  //     if (!disputeId) throw `Missing dispute Id=${disputeId}`;
  //     return await this.disputeService.getInvestigationResults(disputeId);
  //   } catch (err: any) {
  //     this.interstitial.changeMessage('Error fetching results');
  //     return { success: false, error: err };
  //   }
  // }
}
