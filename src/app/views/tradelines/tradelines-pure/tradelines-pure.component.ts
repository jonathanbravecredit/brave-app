import { Component, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/tradeline-details.component';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent implements OnInit {
  @Input() details: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() remarks: string = '';
  @Input() address: string = '';

  constructor() {}

  ngOnInit(): void {}
}
