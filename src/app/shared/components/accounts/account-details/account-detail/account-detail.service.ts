import { EventEmitter, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Injectable()
export class AccountDetailService {
  acknowledged: boolean = false;
  acknowledged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showModal: boolean = false;
  showModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private interstitial: InterstitialService,
    private disputeService: DisputeService,
    private router: Router,
  ) {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      return true;
    } else {
      return false;
    }
  }

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
    }
  }

  onCofirm(tradeline: ITradeLinePartition) {
    const accountType = tu.queries.report.getTradelineTypeDescription(tradeline);
    this.interstitial.changeMessage('checking eligibility');
    this.interstitial.openInterstitial();
    this.disputeService
      .onUserConfirmed()
      .then((resp) => {
        const { success, error } = resp;
        if (success) {
          const filter: DisputeReconfirmFilter = accountType;
          this.router.navigate([routes.root.dashboard.disputes.reconfirm.full], {
            queryParams: {
              type: filter,
            },
          });
        } else {
          const code = `${error?.Code}`;
          // this.handleError(code);
        }
      })
      .catch((err) => {
        // this.handleError();
      });
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    this.showModal$.next(this.showModal);
  }

  toggleAcknowledge(): void {
    this.acknowledged = !this.acknowledged;
    this.acknowledged$.next(this.acknowledged);
  }
}
