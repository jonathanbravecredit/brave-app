import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { ITradeLinePartition, IBorrower, IPublicPartition } from '@shared/interfaces';
import {
  PARAGRAPH_1,
  PARAGRAPH_2,
} from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/constants';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

@Component({
  selector: 'brave-disputes-reconfirm-pure',
  templateUrl: './disputes-reconfirm-pure.view.html',
})
export class DisputesReconfirmPureView implements OnInit {
  @Input() tradelines: ITradelineDetailsConfig[] = [];
  @Input() publicItems: IPublicItemsDetailsConfig[] = [];
  @Input() personalItems: IPersonalItemsDetailsConfig = {} as IPersonalItemsDetailsConfig;
  @Input() type: DisputeReconfirmFilter = 'all';
  @Output() disputeTradelineClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() disputePersonalClick: EventEmitter<IBorrower> = new EventEmitter();
  @Output() disputePublicClick: EventEmitter<IPublicPartition> = new EventEmitter();

  p1 = PARAGRAPH_1;
  p2 = PARAGRAPH_2;
  constructor() {}

  ngOnInit(): void {}
}
