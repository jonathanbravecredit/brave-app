import { Component, Input, OnInit } from '@angular/core';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-dispute-header-tradeline',
  templateUrl: './dispute-header-tradeline.component.html',
})
export class DisputeHeaderTradelineComponent implements OnInit {
  @Input() dispute: IDisputeItem = {} as IDisputeItem;
  missing = TransunionUtil.bcMissing;

  constructor() {}

  ngOnInit(): void {}
}
