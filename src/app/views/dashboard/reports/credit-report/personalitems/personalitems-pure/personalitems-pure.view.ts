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

  constructor(public featureFlags: FeatureFlagsService) {}
}
