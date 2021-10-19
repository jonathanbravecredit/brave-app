import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisputeStatus } from '@shared/constants/disputes.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { TransunionQueries } from '@shared/utils/transunion/queries/transunion-queries';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dispute-findings',
  templateUrl: './dispute-findings.view.html',
})
export class DisputeFindingsView implements OnInit {
  disputes$: Observable<(DisputeInput | null)[] | null | undefined>;
  dispute$: Observable<DisputeInput>;
  stateOfResidence: string = '';
  tuQuery = TransunionQueries;

  constructor(
    public route: ActivatedRoute,
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
  ) {
    this.dispute$ = this.disputeService.currentDispute$.asObservable();
    this.disputes$ = this.disputeService.disputes$.asObservable();
  }

  async ngOnInit(): Promise<void> {
    const dispute = this.disputeService.currentDispute$.value;
    if (!dispute.disputeStatus) {
      // current dispute not set...get it from the
      this.interstitial.closeInterstitial();
    }
    if (
      dispute.disputeStatus?.toLowerCase() === DisputeStatus.Complete &&
      (dispute.disputeInvestigationResults === undefined ||
        dispute.disputeInvestigationResults === null ||
        !JSON.parse(dispute.disputeInvestigationResults))
    ) {
      // auto close...need to get results
      this.interstitial.changeMessage('gathering results');
      this.interstitial.openInterstitial();
      try {
        dispute.disputeId
          ? await this.disputeService.getInvestigationResults(dispute.disputeId)
          : () => {
              throw `Missing dispute Id=${dispute.disputeId}`;
            };
        this.interstitial.closeInterstitial();
      } catch (err) {
        this.interstitial.closeInterstitial();
      }
    } else {
      this.interstitial.closeInterstitial();
    }

    this.stateOfResidence = this.disputeService.getUserStateOfResidence();
  }
}
