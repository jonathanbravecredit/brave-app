import { Component, Input, OnInit } from '@angular/core';
import { CreditMixService } from '@views/dashboard/credit-mix/credit-mix-service/credit-mix-service.service';
import { ICreditMixTLSummary, IRecommendationText } from '../../interfaces/credit-mix-calc-obj.interface';

@Component({
  selector: 'brave-credit-mix-recommendation',
  templateUrl: './credit-mix-recommendation.component.html',
})
export class CreditMixRecommendationComponent implements OnInit {
  show: boolean = true;
  @Input() tradeLineSum: ICreditMixTLSummary | undefined;
  @Input() recommendations: IRecommendationText | undefined

  constructor() {}

  ngOnInit(): void {}

  closeBox(): void {
    this.show = false;
  }

}
