import { Component, Input } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

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
  constructor(public featureFlags: FeatureFlagsService) {}
}
