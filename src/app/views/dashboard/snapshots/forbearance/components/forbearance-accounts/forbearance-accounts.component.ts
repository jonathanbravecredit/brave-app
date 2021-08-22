import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-forbearance-accounts',
  templateUrl: './forbearance-accounts.component.html',
})
export class ForbearanceAccountsComponent implements OnInit {
  @Input() accounts: any = [];
  @Output() viewDetailClick: EventEmitter<ITradeLinePartition> = new EventEmitter();
  tu = TransunionUtil;
  constructor() {}

  ngOnInit(): void {}
}
