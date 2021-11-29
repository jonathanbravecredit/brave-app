import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { ICreditMixTLSummary, TCreditMixCalcObj } from '../interfaces/credit-mix-calc-obj.interface';

@Component({
  selector: 'brave-credit-mix-pure',
  templateUrl: './credit-mix-pure.view.html',
  styleUrls: ['./credit-mix-pure.view.css']
})
export class CreditMixPureView implements OnInit {
  @Input() tradeLineParition: ITradeLinePartition[] | undefined;
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;
  @Input() creditMixCalculationObj: TCreditMixCalcObj | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
