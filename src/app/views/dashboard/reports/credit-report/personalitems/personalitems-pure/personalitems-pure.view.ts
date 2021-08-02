import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IBorrower } from '@shared/interfaces';

@Component({
  selector: 'brave-personalitems-pure',
  templateUrl: './personalitems-pure.view.html',
})
export class PersonalitemsPureView {
  /**
   * Tradelines are individual credit report accounts
   */
  @Input() personalItem: IBorrower = {} as IBorrower;
  /**
   * Config parameters with parsed tradeline data
   */
  @Input() config: IPersonalItemsDetailsConfig = {} as IPersonalItemsDetailsConfig;
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * - Pass up the tradlinePartition clicked on from here
   */
  @Output() disputeClick: EventEmitter<IBorrower> = new EventEmitter();

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
