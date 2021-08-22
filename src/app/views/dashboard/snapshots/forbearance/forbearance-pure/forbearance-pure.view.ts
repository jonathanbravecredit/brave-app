import { Component, Input, OnInit } from '@angular/core';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { forbearanceAccountsContent } from '@views/dashboard/snapshots/forbearance/forbearance-pure/content';

@Component({
  selector: 'brave-forbearance-pure',
  templateUrl: './forbearance-pure.view.html',
})
export class ForbearancePureView implements OnInit {
  @Input() tradelines: ITradeLinePartition[] = [];
  content = forbearanceAccountsContent;
  groups = CreditReportGroups;
  tu = TransunionUtil;
  constructor() {}

  ngOnInit(): void {}
}
