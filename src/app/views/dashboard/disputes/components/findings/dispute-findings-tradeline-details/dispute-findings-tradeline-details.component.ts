import { Component, Input } from '@angular/core';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { ITradelineCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';

@Component({
  selector: 'brave-dispute-findings-tradeline-details',
  templateUrl: './dispute-findings-tradeline-details.component.html',
})
export class DisputeFindingsTradelineDetailsComponent {
  /**
   * Original tradelines are individual credit report accounts
   */
  @Input() tradeline: ITradelineCreditBureauConfig | undefined | null = {} as ITradelineCreditBureauConfig;
  /**
   * View configs for showing different detail table configs
   */
  @Input() type: 'default' | 'findings' = 'default';
  public tu = TransunionUtil;

  constructor() {}
}
