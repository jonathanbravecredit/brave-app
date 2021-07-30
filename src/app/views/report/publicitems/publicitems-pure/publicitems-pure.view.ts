import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { IPublicPartition } from '@shared/interfaces';

@Component({
  selector: 'brave-publicitems-pure',
  templateUrl: './publicitems-pure.view.html',
})
export class PublicitemsPureView {
  /**
   * Tradelines are individual credit report accounts
   */
  @Input() publicItem: IPublicPartition = {} as IPublicPartition;
  /**
   * Config parameters with parsed tradeline data
   */
  @Input() config: IPublicItemsDetailsConfig = {} as IPublicItemsDetailsConfig;
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * - Pass up the tradlinePartition clicked on from here
   */
  @Output() disputeClick: EventEmitter<IPublicPartition> = new EventEmitter();

  showModal: boolean = false;

  constructor() {}

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
      this.disputeClick.emit();
    }
  }

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      this.disputeClick.emit();
      console.log('confirmed');
    }
  }
}
