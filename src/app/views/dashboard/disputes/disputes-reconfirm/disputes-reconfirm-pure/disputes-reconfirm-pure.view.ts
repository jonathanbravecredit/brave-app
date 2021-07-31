import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@shared/components/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { ITradeLinePartition, IBorrower, IPublicPartition } from '@shared/interfaces';
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
  @Output() disputeTradelineClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() disputePersonalClick: EventEmitter<IBorrower> = new EventEmitter();
  @Output() disputePublicClick: EventEmitter<IPublicPartition> = new EventEmitter();

  p1 = PARAGRAPH_1;
  p2 = PARAGRAPH_2;
  constructor() {}

  ngOnInit(): void {}
}
