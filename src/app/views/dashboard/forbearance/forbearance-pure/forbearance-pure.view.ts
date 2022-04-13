import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { forbearanceAccountsContent } from '@views/dashboard/forbearance/forbearance-pure/content';

@Component({
  selector: 'brave-forbearance-pure',
  templateUrl: './forbearance-pure.view.html',
})
export class ForbearancePureView implements OnInit {
  @Input() tradelines: ITradeLinePartition[] = [];
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  @Output() infoClick: EventEmitter<void> = new EventEmitter();

  content = forbearanceAccountsContent;
  groups = CreditReportGroups;
  tu = TransunionUtil;
  constructor() {}

  ngOnInit(): void {}
}