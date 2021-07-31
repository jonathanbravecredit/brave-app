import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';

@Component({
  selector: 'brave-disputes-reconfirm-pure',
  templateUrl: './disputes-reconfirm-pure.view.html',
})
export class DisputesReconfirmPureView implements OnInit {
  @Input() tradelines: ITradelineDetailsConfig[] = [];
  @Input() publicItems: IPublicItemsDetailsConfig[] = [];
  @Input() personalItems: IPersonalItemsDetailsConfig = {} as IPersonalItemsDetailsConfig;

  constructor() {}

  ngOnInit(): void {}
}
