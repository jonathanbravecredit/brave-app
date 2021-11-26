import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { ICreditMixTLSummary } from '@shared/interfaces/credit-mix-tl-summary.interface';

@Component({
  selector: 'brave-credit-mix-pure',
  templateUrl: './credit-mix-pure.view.html',
  styleUrls: ['./credit-mix-pure.view.css']
})
export class CreditMixPureView implements OnInit {
  @Input() tradeLineParition: ITradeLinePartition[] | undefined;
  @Input() tradeLineSummary: ICreditMixTLSummary | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
