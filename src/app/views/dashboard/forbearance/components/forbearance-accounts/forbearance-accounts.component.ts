import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { forbearanceAccountsContent } from '@views/dashboard/forbearance/components/forbearance-accounts/content';

@Component({
  selector: 'brave-forbearance-accounts',
  templateUrl: './forbearance-accounts.component.html',
})
export class ForbearanceAccountsComponent {
  @Input() accounts: any = [];
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  tu = TransunionUtil;
  content = forbearanceAccountsContent;
  constructor() {}
}
