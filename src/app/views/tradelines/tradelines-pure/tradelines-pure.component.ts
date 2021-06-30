import { Component, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/tradeline-details.component';
import { IPayStatusHistory, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent implements OnInit {
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  @Input() details: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  @Input() remarks: string = '';
  @Input() address: string = ''; // need clarification on what this address is.

  constructor() {}

  ngOnInit(): void {}
}
