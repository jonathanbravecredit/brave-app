import { Component, Input, OnInit } from '@angular/core';
import { IDisputePersonalItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-dispute-header-personalitem',
  templateUrl: './dispute-header-personalitem.component.html',
})
export class DisputeHeaderPersonalitemComponent implements OnInit {
  @Input() dispute: IDisputePersonalItem = {} as IDisputePersonalItem;
  missing = TransunionUtil.bcMissing;
  constructor() {}

  ngOnInit(): void {}
}
