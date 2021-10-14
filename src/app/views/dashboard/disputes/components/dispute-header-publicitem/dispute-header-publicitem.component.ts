import { Component, Input, OnInit } from '@angular/core';
import { IDisputePublicItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-dispute-header-publicitem',
  templateUrl: './dispute-header-publicitem.component.html',
})
export class DisputeHeaderPublicitemComponent implements OnInit {
  @Input() dispute: IDisputePublicItem = {} as IDisputePublicItem;
  missing = TransunionUtil.bcMissing;
  constructor() {}

  ngOnInit(): void {}
}
