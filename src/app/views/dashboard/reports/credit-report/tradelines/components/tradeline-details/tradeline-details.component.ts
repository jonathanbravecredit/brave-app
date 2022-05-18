import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { state, style, trigger, animate, transition } from '@angular/animations';

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
  animations: [
    trigger("openClose", [
      state("closed", style({ height: "0" })),
      state("open", style({ height: "*" })),
      transition("closed => open", [animate("0.2s linear")]),
      transition("open => closed", [animate("0.2s linear")]),
    ]),
  ],
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
   * Flag to disable the dispute capabilities of component
   */
  @Input() disableDispute: boolean = false;
  /**
   * Flag to start with the payment history open and not show the show payment button
   */
  @Input() overrideOpen: boolean = false;

  public tu = TransunionUtil;

  constructor(public featureFlags: FeatureFlagsService) {}
}
