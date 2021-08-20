import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { IPayStatusHistory, ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

/**
 * @property {ITradelineDetailsConfig} config
 * @property {IPayStatusHistory | undefined} paymentHistory
 * @property {string} remarks
 * @property {string} customerStatement
 * @property {string} address
 * @property {boolean} acknowledged
 * @property {EventEmitter<void>} disputeClick
 * @property {boolean} showModal
 */
@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent {
  /**
   * Original tradelines are individual credit report accounts
   */
  @Input() tradeline: ITradeLinePartition | undefined | null = {} as ITradeLinePartition;
  /**
   * The matching subscriber (creditor data) to the tradeline detail
   */
  @Input() subscriber: ISubscriber | undefined | null = {} as ISubscriber;
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false; // TODO replace with a config value
  /**
   * Event emitter when dispute button clicked on tradeline detail
   */
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  /**
   * Flag to disable the dispute capabilities of component
   */
  @Input() disableDispute: boolean = false;
  /**
   * Flag to start with the payment history open and not show the show payment button
   */
  @Input() overrideOpen: boolean = false;
  /**
   * Toggle to open dispute disclaimer modal
   */
  showModal: boolean = false;
  public tu = TransunionUtil;

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
    }
  }
}
