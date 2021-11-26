import { Component, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { CreditMixService } from '../credit-mix-service/credit-mix-service.service';

@Component({
  selector: 'brave-credit-mix',
  templateUrl: './credit-mix.view.html'
})
export class CreditMixView implements OnInit {
  tradeLineParition: ITradeLinePartition[] | undefined

  constructor(
    private creditMix: CreditMixService
  ) { }

  ngOnInit(): void {
    this.tradeLineParition = this.creditMix.getCreditReport()

    console.log('CREDIT REPORT ====>>>>>>', this.tradeLineParition)
  }

}
