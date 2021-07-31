import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import {
  PARAGRAPH_1,
  PARAGRAPH_2,
} from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/constants';

@Component({
  selector: 'brave-disputes-reconfirm-pure',
  templateUrl: './disputes-reconfirm-pure.view.html',
})
export class DisputesReconfirmPureView implements OnInit {
  @Input() tradelines: ITradelineDetailsConfig[] = [];
  @Input() publicItems: IPublicItemsDetailsConfig[] = [];
  @Input() personalItems: IPersonalItemsDetailsConfig = {} as IPersonalItemsDetailsConfig;

  p1 = PARAGRAPH_1;
  p2 = PARAGRAPH_2;
  constructor() {}

  ngOnInit(): void {}
}
