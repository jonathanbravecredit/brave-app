import { Component, Input, OnInit } from '@angular/core';
import { IDisputeTradelineItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-dispute-header-tradeline',
  templateUrl: './dispute-header-tradeline.component.html',
})
export class DisputeHeaderTradelineComponent implements OnInit {
  @Input() dispute: IDisputeTradelineItem | undefined = {} as IDisputeTradelineItem;
  missing = TransunionUtil.bcMissing;

  constructor() {}

  ngOnInit(): void {
    console.log('dispute ==> ', this.dispute);
  }
}
