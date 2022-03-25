import { EventEmitter, Injectable, Input } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountDetailService {
  acknowledged: boolean = false;
  acknowledged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showModal: boolean = false;
  showModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      return true
    } else {
      return false
    }
  }

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
    }
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
