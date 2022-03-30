import { Component, Input, OnInit } from '@angular/core';
import { IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-account-summary-publicitem',
  templateUrl: './account-summary-publicitem.component.html',
})
export class AccountSummaryPublicitemComponent implements OnInit {
  @Input() publicItem: IDisputePublicItem = {} as IDisputePublicItem;
  missing = TransunionUtil.bcMissing;
  constructor() {}

  ngOnInit(): void {}
}
