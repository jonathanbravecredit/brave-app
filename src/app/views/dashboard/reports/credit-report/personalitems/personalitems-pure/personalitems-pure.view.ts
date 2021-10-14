import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { IBorrower } from '@shared/interfaces';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

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
  @Input() config: IPersonalItemsDetailsTable = {} as IPersonalItemsDetailsTable;
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * - Pass up the tradlinePartition clicked on from here
   */
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  showModal: boolean = false;

  constructor(public featureFlags: FeatureFlagsService) {}

  disputeClicked(): void {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
      this.disputeClick.emit();
    }
  }

  actionForDispute(e: IOnboardingEvent): void {
    if (e.isConfirmed) {
      this.showModal = false;
      this.disputeClick.emit();
    }
  }
}
