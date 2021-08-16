import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

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
   * Config parameters with parsed tradeline data
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  /**
   * Payments Status History from Merge Report
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  /**
   * Credit Statement from Merge Report
   */
  @Input() customerStatement: string = '';
  /**
   * Remarks from Merge Report
   */
  @Input() remarks: string = '';
  /**
   * Address from Merge Report...TODO need better definition
   */
  @Input() address: string = '';
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   */
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  /**
   * Toggle to open dispute disclaimer modal
   */
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
    }
  }
}
