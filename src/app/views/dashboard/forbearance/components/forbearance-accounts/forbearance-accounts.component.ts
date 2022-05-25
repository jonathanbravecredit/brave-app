import { Component, Input } from '@angular/core';
import { ViewDetailOrientation } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { ForbearanceService } from '@views/dashboard/forbearance/forbearance.service';
import { FORBEARANCE_CONTENT } from '@views/dashboard/forbearance/forbearance.content';

export type ForbearanceViewType = 'installment' | 'mortgage' | 'unknown';

@Component({
  selector: 'brave-forbearance-accounts',
  templateUrl: './forbearance-accounts.component.html',
})
export class ForbearanceAccountsComponent {
  @Input() tradelines: ITradeLinePartition[] = [];
  @Input() viewType: ForbearanceViewType = 'unknown';
  @Input() viewDetailOrientation: ViewDetailOrientation = 'horizontal-right';

  content = FORBEARANCE_CONTENT.accounts;

  constructor(private forbearanceService: ForbearanceService) {}

  onViewDetail(tradeline: ITradeLinePartition | undefined): void {
    if (!tradeline) {
      console.error('No tradeline in forbearance account: ', tradeline);
    } else {
      this.forbearanceService.onViewDetail(tradeline);
    }
  }
}
