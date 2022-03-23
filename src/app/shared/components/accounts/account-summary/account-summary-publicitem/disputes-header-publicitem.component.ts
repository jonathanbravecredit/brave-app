import { Component, Input, OnInit } from '@angular/core';
import { IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-disputes-header-publicitem',
  templateUrl: './disputes-header-publicitem.component.html',
})
export class DisputesHeaderPublicitemComponent implements OnInit {
  @Input() dispute: IDisputePublicItem = {} as IDisputePublicItem;
  missing = TransunionUtil.bcMissing;
  constructor() {}

  ngOnInit(): void {}
}
