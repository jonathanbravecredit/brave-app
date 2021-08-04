import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import {
  ITradeLinePartition,
  IBorrower,
  IPublicPartition,
  IBorrowerAddress,
  IBorrowerName,
  IEmployer,
} from '@shared/interfaces';
import {
  PARAGRAPH_1,
  PARAGRAPH_2,
} from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/constants';
import {
  DisputeReconfirmFilter,
  PersonalDisputeTypes,
} from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

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
  @Output() disputePersonalClick: EventEmitter<{
    personalItem: IBorrowerAddress | IEmployer | IBorrowerName | undefined;
    personalType: PersonalDisputeTypes;
  }> = new EventEmitter();
  @Output() disputePublicClick: EventEmitter<IPublicPartition> = new EventEmitter();
  tu = TransunionUtil;
  p1 = PARAGRAPH_1;
  p2 = PARAGRAPH_2;
  constructor() {}

  ngOnInit(): void {}
}
